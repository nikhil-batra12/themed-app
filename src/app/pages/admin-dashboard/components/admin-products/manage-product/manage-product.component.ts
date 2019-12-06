import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.scss']
})
export class ManageProductComponent implements OnInit {
  productForm: FormGroup;
  @Input('mode') mode: String;
  @Input('product') product;
  constructor(private fb: FormBuilder,protected ref: NbDialogRef<ManageProductComponent>) { }

  ngOnInit() {
    this.createForm();
  }

  dismissDialog(){
    this.ref.close();
  }

  createForm() {
    this.productForm = this.fb.group({
      productId: [this.product? this.product.id:  null, [Validators.required, Validators.pattern('^[a-zA-Z ]*')]],
      name: [this.product? this.product.name: null, [Validators.required]],
      description: [this.product? this.product.description: null,  [Validators.required]],
      price: [this.product? this.product.price: null, [Validators.required, Validators.pattern('^[0-9]{10}')]],
      featuredImage: [this.product? this.product.featuredImage: null, [Validators.pattern('^[0-9]{10}')]],
    });
  }

  saveProduct(){
    console.log(this.productForm.value);
  }

}
