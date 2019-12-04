import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-layout',
  templateUrl: './product-layout.component.html',
  styleUrls: ['./product-layout.component.scss']
})
export class ProductLayoutComponent implements OnInit {
  @Input () enableEnquiry: boolean = true;
  products = [];
  productsPerRow = [];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(res => {
      this.products = res.data.products;
      this.computeProductsPerRow();
    })
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