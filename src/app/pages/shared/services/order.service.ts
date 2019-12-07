import { Injectable } from '@angular/core';
import { ApiServceService } from './api-servce.service';
import { AppSettings } from '../../../config/app-settings';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
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

  getOrders(){
    let config = {
      url: AppSettings.apiEndpoints.orders.getOrder
    };
    config = Object.assign({}, this.defaultConfig, config);
    return this.apiServceService.getRequest(config).pipe(
      map(response => {
        return response;
      })
    );
  }

  addOrder(data:any){
    let config = {
      url: AppSettings.apiEndpoints.orders.getOrder,
      data
    };
    config = Object.assign({}, this.defaultConfig, config);
    return this.apiServceService.postRequest(config).pipe(
      map(response => {
        return response;
      })
    );
  }

  saveOrder(data:any){
    let config = {
      url: AppSettings.apiEndpoints.orders.getOrder,
      data
    };
    config = Object.assign({}, this.defaultConfig, config);
    return this.apiServceService.postRequest(config).pipe(
      map(response => {
        return response;
      })
    );
  }
}
