import { Component, OnInit, Input } from "@angular/core";
import { NbDialogService } from '@nebular/theme';
import { ProductEnquiryFormComponent } from '../product-enquiry-form/product-enquiry-form.component';

@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.scss"]
})
export class ProductCardComponent implements OnInit {
  @Input() product: Array<any>;
  constructor(private dialogService: NbDialogService) {}

  ngOnInit() {
  }

  open(product) {
    this.dialogService.open(ProductEnquiryFormComponent, {
      context: {
        product: product,
      },
    });
  }
}
