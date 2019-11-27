import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
})
export class ECommerceComponent implements OnInit{
  sliders =[];
  constructor(private productService: ProductService){}
//   sliders = [{
//     "imagePath": "assets/images/slider1.jpg",
//     "label": "First slide label",
//     "text": "This is the first slide image"
// },
// {
//     "imagePath": "assets/images/slider2.jpg",
//     "label": "Second slide label",
//     "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
// },
// {
//     "imagePath": "assets/images/slider3.jpg",
//     "label": "Third slide label",
//     "text": "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
// }];

ngOnInit(){
  this.productService.getSliderImages()
  .subscribe((response:any) => 
    this.sliders=response.data.sliderImages);
}
}
