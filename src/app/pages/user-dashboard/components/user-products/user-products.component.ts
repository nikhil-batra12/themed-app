import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../../shared/services/product.service";
import { NbAuthService, NbAuthJWTToken } from "@nebular/auth";

@Component({
  selector: "ngx-user-products",
  templateUrl: "./user-products.component.html",
  styleUrls: ["./user-products.component.scss"]
})
export class UserProductsComponent implements OnInit {
  sliders = [];
  user = {};
  constructor(
    private productService: ProductService,
    private authService: NbAuthService
  ) {}

  ngOnInit() {
    this.productService
      .getSliderImages()
      .subscribe(
        (response: any) => (this.sliders = response.data.sliderImages)
      );

    this.authService.onTokenChange().subscribe((token: NbAuthJWTToken) => {
      if (token.isValid()) {
        this.user = token.getPayload(); // here we receive a payload from the token and assigns it to our `user` variable
      }
    });
  }
}
