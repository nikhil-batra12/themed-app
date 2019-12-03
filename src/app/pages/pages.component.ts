import { Component, OnInit } from "@angular/core";

import { MENU_ITEMS } from "./guest-page-menu";
import { NbAccessChecker } from "@nebular/security";
import { Router } from "@angular/router";

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
  menu = MENU_ITEMS;
  constructor(private accessChecker: NbAccessChecker, private router: Router) {}

  ngOnInit() {
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
