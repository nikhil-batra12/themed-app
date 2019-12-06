import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-manage-customer',
  templateUrl: './manage-customer.component.html',
  styleUrls: ['./manage-customer.component.scss']
})
export class ManageCustomerComponent implements OnInit {
  customerForm: FormGroup;
  @Input('mode') mode: String;
  @Input('customer') customer;
  constructor(private fb: FormBuilder,protected ref: NbDialogRef<ManageCustomerComponent>) { }

  ngOnInit() {
    this.createForm();
  }

  dismissDialog(){
    this.ref.close();
  }

  createForm() {
    this.customerForm = this.fb.group({
      customerId: [this.customer? this.customer.customerId:  null, [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]*')]],
      customerName: [this.customer? this.customer.customerName: null, [Validators.required, Validators.pattern('^[a-zA-Z ]*')]],
      customerAddress: [this.customer? this.customer.customerAddress: null],
      customerEmail: [this.customer? this.customer.customerEmail: null, [Validators.required, Validators.email]],
      customerPhoneNumber: [this.customer? this.customer.customerPhoneNumber: null, [Validators.pattern('^[0-9]{10}')]],
      otherDetails: [this.customer? this.customer.otherDetails: null, []],
    });
  }

  saveCustomer(){
    console.log(this.customerForm.value);
  }

}
