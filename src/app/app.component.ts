/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import {NbAclService} from '@nebular/security';
import aclConfig from './config/acl-config';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private nbAclService:NbAclService) {
  }

  ngOnInit(): void {
    this.nbAclService.setAccessControl(aclConfig);
  }
}
