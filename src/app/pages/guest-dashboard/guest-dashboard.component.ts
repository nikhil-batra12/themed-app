import { Component, OnInit } from "@angular/core";
import { NbAccessChecker } from "@nebular/security";
import { Router } from "@angular/router";

@Component({
  selector: "ngx-guest-dashboard",
  templateUrl: "./guest-dashboard.component.html"
})
export class GuestDashboardComponent implements OnInit {
  constructor(private accessChecker: NbAccessChecker, private router: Router) {}

  ngOnInit() {
    this.accessChecker.isGranted("view", "USER_VIEW").subscribe(res => {
      if (res) {
        this.router.navigate(["pages/user-dashboard"]);
        return;
      }
    });

    this.accessChecker.isGranted("view", "ADMIN_PANEL").subscribe(res => {
      if (res) {
        this.router.navigate(["pages/admin-dashboard"]);
        return;
      }
    });
    this.accessChecker.isGranted("view", "NO_LOGIN_STATE").subscribe(res => {
      if (res) {
        this.router.navigate(["pages/dashboard"]);
        return;
      }
    });
  }
}
