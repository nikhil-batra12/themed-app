import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-product-layout',
  templateUrl: './product-layout.component.html',
  styleUrls: ['./product-layout.component.scss']
})
export class ProductLayoutComponent implements OnInit {
  products = [];
  productsPerRow = [];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(res => {
      this.products = res.data.products;
      this.computeProductsPerRow();
    })
    // this.products = [{
    //   name: 'Door 1',
    //   id: 'DOOR_ID_1',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //   price: 'Rs. 15,000',
    //   imgSrc: 'assets/images/product_1.png',
    // },{
    //   name: 'Door 2',
    //   id: 'DOOR_ID_2',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //   price: 'Rs. 16,000',
    //   imgSrc: 'assets/images/product_1.png',
    // },{
    //   name: 'Door 3',
    //   id: 'DOOR_ID_3',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //   price: 'Rs. 14,000',
    //   imgSrc: 'assets/images/product_1.png',
    // },{
    //   name: 'Door 4',
    //   id: 'DOOR_ID_4',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //   price: 'Rs. 15,800',
    //   imgSrc: 'assets/images/product_1.png',
    // },{
    //   name: 'Door 5',
    //   id: 'DOOR_ID_5',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //   price: 'Rs. 17,000',
    //   imgSrc: 'assets/images/product_1.png',
    // },{
    //   name: 'Door 6',
    //   id: 'DOOR_ID_6',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //   price: 'Rs. 18,000',
    //   imgSrc: 'assets/images/product_1.png',
    // },{
    //   name: 'Door 7',
    //   id: 'DOOR_ID_7',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //   price: 'Rs. 15,000',
    //   imgSrc: 'assets/images/product_1.png',
    // },{
    //   name: 'Door 8',
    //   id: 'DOOR_ID_8',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //   price: 'Rs. 17,000',
    //   imgSrc: 'assets/images/product_1.png',
    // }]
    
  }

  private computeProductsPerRow() {
    const resultArr = [];
    let j = -1;
    for (let i = 0; i < this.products.length; i++) {
      if (i % 4 === 0) {
        j++;
        resultArr[j] = [];
        resultArr[j].push(this.products[i]);
      } else {
        resultArr[j].push(this.products[i]);
      }
    }
    this.productsPerRow = resultArr;
  }

}