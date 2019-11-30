import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-layout',
  templateUrl: './product-layout.component.html',
  styleUrls: ['./product-layout.component.scss']
})
export class ProductLayoutComponent implements OnInit {
  products = [];
  constructor() { }

  ngOnInit() {
    this.products = [{
      name: 'Door 1',
      productId: 'DOOR_ID_1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 'Rs. 15,000',
      imgSrc: 'assets/images/product_1.png',
    },{
      name: 'Door 2',
      productId: 'DOOR_ID_2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 'Rs. 16,000',
      imgSrc: 'assets/images/product_1.png',
    },{
      name: 'Door 3',
      productId: 'DOOR_ID_3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 'Rs. 14,000',
      imgSrc: 'assets/images/product_1.png',
    },{
      name: 'Door 4',
      productId: 'DOOR_ID_4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 'Rs. 15,800',
      imgSrc: 'assets/images/product_1.png',
    },{
      name: 'Door 5',
      productId: 'DOOR_ID_5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 'Rs. 17,000',
      imgSrc: 'assets/images/product_1.png',
    },{
      name: 'Door 6',
      productId: 'DOOR_ID_6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 'Rs. 18,000',
      imgSrc: 'assets/images/product_1.png',
    },{
      name: 'Door 7',
      productId: 'DOOR_ID_7',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 'Rs. 15,000',
      imgSrc: 'assets/images/product_1.png',
    },{
      name: 'Door 8',
      productId: 'DOOR_ID_8',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 'Rs. 17,000',
      imgSrc: 'assets/images/product_1.png',
    }]
  }

}