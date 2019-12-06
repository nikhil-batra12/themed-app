import { Component, OnInit } from "@angular/core";

import { USER_MENU_ITEMS } from "./menu-items/user-page-menu";
import { ADMIN_MENU_ITEMS } from "./menu-items/admin-page-menu";
import { NbAccessChecker } from "@nebular/security";
import { Router } from "@angular/router";
import { RoleService } from "./shared/services/role.service";

@Component({
  selector: "ngx-pages",
  styleUrls: ["pages.component.scss"],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `
})
export class PagesComponent implements OnInit {
  menu = [];
  constructor(
    private accessChecker: NbAccessChecker,
    private router: Router,
    private roleService: RoleService
  ) {}

  ngOnInit() {
    this.roleService.getRole().subscribe(res => {
      if (res === "admin") {
        this.menu = ADMIN_MENU_ITEMS;
      } else {
        this.menu = USER_MENU_ITEMS;
      }
    });
    this.accessChecker.isGranted("view", "USER_VIEW").subscribe(res => {
      if (res) {
        this.router.navigate(["pages/user-dashboard"]);
      }
    });

    this.accessChecker.isGranted("view", "ADMIN_PANEL").subscribe(res => {
      if (res) {
        this.router.navigate(["pages/admin-dashboard"]);
      }
    });
    this.accessChecker.isGranted("view", "NO_LOGIN_STATE").subscribe(res => {
      if (res) {
        this.router.navigate(["pages/dashboard"]);
      }
    });
  }
}
