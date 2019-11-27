import { Injectable } from '@angular/core';
import { ApiServceService } from '../../@core/services/api-servce.service';
import { AppSettings } from '../../config/app-settings';
import { map } from 'rxjs/operators';

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
    const params = {};
    let config = {
      url: AppSettings.apiEndpoints.products.sliderimages,
      params
    };
    config = Object.assign({}, this.defaultConfig, config);
    return this.apiServceService.getRequest(config).pipe(
      map(response => {
        this.sliderImages = response;
        return this.sliderImages;
      })
    );
  }
}
