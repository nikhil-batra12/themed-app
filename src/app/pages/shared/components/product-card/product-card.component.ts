import { Component, OnInit, Input } from "@angular/core";
import { NbDialogService } from '@nebular/theme';
import { ProductEnquiryFormComponent } from '../../../guest-dashboard/components/product-enquiry-form/product-enquiry-form.component';

@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.scss"]
})
export class ProductCardComponent implements OnInit {
  @Input() product: Array<any>;
  @Input() enableEnquiry: boolean;
  constructor(private dialogService: NbDialogService) {}

  ngOnInit() {
  }

  open(product) {
    if(!this.enableEnquiry){
      return;
    }
    this.dialogService.open(ProductEnquiryFormComponent, {
      context: {
        product: product,
      },
    });
  }
}
