import { Component, OnInit } from "@angular/core";
import { NbAccessChecker } from "@nebular/security";
import { Router } from "@angular/router";

@Component({
  selector: "ngx-user-dashboard",
  template: '<router-outlet></router-outlet>'
})
export class UserDashboardComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    
  }
}
