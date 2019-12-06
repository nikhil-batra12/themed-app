import { Injectable } from '@angular/core';
import { ApiServceService } from './api-servce.service';
import { AppSettings } from '../../../config/app-settings';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
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

  getCustomers(){
    let config = {
      url: AppSettings.apiEndpoints.customers.getCsutomers
    };
    config = Object.assign({}, this.defaultConfig, config);
    return this.apiServceService.getRequest(config).pipe(
      map(response => {
        return response;
      })
    );
  }

  addCustomer(data:any){
    let config = {
      url: AppSettings.apiEndpoints.customers.addCustomer,
      data
    };
    config = Object.assign({}, this.defaultConfig, config);
    return this.apiServceService.postRequest(config).pipe(
      map(response => {
        return response;
      })
    );
  }

  saveCustomer(data:any){
    let config = {
      url: AppSettings.apiEndpoints.customers.saveCustomer,
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
