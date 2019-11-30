import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.scss"]
})
export class ProductCardComponent implements OnInit {
  @Input() products: Array<any>;
  multipleImageSlider: Array<any> = [];
  constructor() {}

  private multiImageSlider() {
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
    this.multipleImageSlider = resultArr;
    console.log(this.multipleImageSlider);
  }
  ngOnInit() {
    this.multiImageSlider();
  }
}
