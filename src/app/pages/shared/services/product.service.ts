import { Injectable } from '@angular/core';
import { AppSettings } from '../../../config/app-settings';
import { map } from 'rxjs/operators';
import { ApiServceService } from './api-servce.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  sliderImages = [];
  private readonly defaultConfig = {
    url: '',
    params: {},
    headers: {},
    getCompleteResponse: false,
    data: ''
  };

  constructor(
    private apiServceService: ApiServceService,
  ) { }

  getSliderImages() {
    let config = {
      url: AppSettings.apiEndpoints.products.sliderimages
    };
    config = Object.assign({}, this.defaultConfig, config);
    return this.apiServceService.getRequest(config).pipe(
      map(response => {
        return response;
      })
    );
  }

  getProducts(){
    let config = {
      url: AppSettings.apiEndpoints.products.getProduct
    };
    config = Object.assign({}, this.defaultConfig, config);
    return this.apiServceService.getRequest(config).pipe(
      map(response => {
        return response;
      })
    );
  }

  submitProductEnquiry(data) {
    let config = {
      url: AppSettings.apiEndpoints.products.submitEnquiry,
      data
    };
    config = Object.assign({}, this.defaultConfig, config);
    return this.apiServceService.postRequest(config).pipe(
      map(response => {
        return response;
      })
    );
  }

  addProduct(data:any){
    let config = {
      url: AppSettings.apiEndpoints.products.addProduct,
      data
    };
    config = Object.assign({}, this.defaultConfig, config);
    return this.apiServceService.postRequest(config).pipe(
      map(response => {
        return response;
      })
    );
  }

  updateProduct(data:any){
    let config = {
      url: AppSettings.apiEndpoints.products.updateProduct,
      data
    };
    config = Object.assign({}, this.defaultConfig, config);
    return this.apiServceService.postRequest(config).pipe(
      map(response => {
        return response;
      })
    );
  }

  deleteProduct(productId:any){
    let config = {
      url: AppSettings.apiEndpoints.products.deleteProduct.replace(":productId",productId),
    };
    config = Object.assign({}, this.defaultConfig, config);
    return this.apiServceService.postRequest(config).pipe(
      map(response => {
        return response;
      })
    );
  }


}
