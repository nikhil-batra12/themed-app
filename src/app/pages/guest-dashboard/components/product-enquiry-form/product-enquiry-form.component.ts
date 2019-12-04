import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import {
  NbComponentStatus,
  NbGlobalLogicalPosition,
  NbGlobalPhysicalPosition,
  NbGlobalPosition,
  NbToastrService,
} from '@nebular/theme';
import { ProductService } from '../../../shared/services/product.service';

@Component({
  selector: 'ngx-product-enquiry-form',
  templateUrl: './product-enquiry-form.component.html',
  styleUrls: ['./product-enquiry-form.component.scss']
})
export class ProductEnquiryFormComponent implements OnInit {
  @Input('product') product;
  enquiryForm: FormGroup;
  toasterConfig= { 
    destroyByClick : true,
    duration : 10000,
    hasIcon : true,
    position: NbGlobalPhysicalPosition.TOP_RIGHT,
    preventDuplicates : true,
    status:'primary',
  }
  toasterContent = {
    title: 'Success!',
    content: `Enquiry is sent successfully. We will contact you soon.`
  }
  
  constructor( private fb: FormBuilder, private productService: ProductService, protected ref: NbDialogRef<ProductEnquiryFormComponent>, private toastrService: NbToastrService) { }

  ngOnInit() {
    this.createForm();
  }

  submitEnquiry(){
    console.log(this.enquiryForm);
    if(this.enquiryForm.valid){
      const data = {...this.enquiryForm.value, id: this.product.id };
      this.productService.submitProductEnquiry(data).subscribe(response => {
        console.log(response);
        this.showToast();
        this.dismissDialog();
      })

    }
  }

  dismissDialog(){
    this.ref.close();
  }

  createForm() {
    this.enquiryForm = this.fb.group({
      name: [null, [Validators.required, Validators.pattern('^[a-zA-Z ]*')]],
      phoneNumber: [null, [Validators.required, Validators.pattern('^(7|8|9)[0-9]{9}')]],
      email: [null, [Validators.required, Validators.email]],
      message: [null, Validators.maxLength(300)]
    });
  }

  private showToast(type: NbComponentStatus='primary', title?: string, body?: string) {
    const config = Object.assign({}, this.toasterConfig, {status: type});
    const titleContent = title ? `${title}` : this.toasterContent.title;
    const bodyContent = body ? `${body}` : this.toasterContent.content;
    this.toastrService.show(
      bodyContent,
      `${titleContent}`,
      config);
  }

}
