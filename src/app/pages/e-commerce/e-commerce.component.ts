import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/services/product.service';
import { NbAuthJWTToken , NbAuthService } from '@nebular/auth';

@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
})
export class ECommerceComponent implements OnInit{
  sliders =[];
  user = {};
  constructor(private productService: ProductService,private authService: NbAuthService){}


ngOnInit(){
  this.productService.getSliderImages()
  .subscribe((response:any) => 
    this.sliders=response.data.sliderImages);

    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken ) => {

        if (token.isValid()) {
          this.user = token.getPayload(); // here we receive a payload from the token and assigns it to our `user` variable 
        }
        console.log(token);
      });
  }

}
