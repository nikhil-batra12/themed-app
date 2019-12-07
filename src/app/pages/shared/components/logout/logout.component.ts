import { Router } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-logout',
  templateUrl: './logout.component.html'
})
export class LogoutComponent implements OnInit {

  constructor(private authService: NbAuthService, private router: Router) { }

  ngOnInit() {
    this.authService.logout('email').subscribe(res => {
      // this.router.navigate()
    })
  }

}
