import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-user-products',
  templateUrl: './user-products.component.html',
  styleUrls: ['./user-products.component.scss']
})
export class UserProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("init")
  }

}
