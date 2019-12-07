import { CustomerService } from './../../../../shared/services/customer.service';
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
  constructor(private fb: FormBuilder,protected ref: NbDialogRef<ManageCustomerComponent>, private customerService: CustomerService) { }

  ngOnInit() {
    this.createForm();
  }

  dismissDialog(){
    this.ref.close();
  }

  createForm() {
    this.customerForm = this.fb.group({
      customerId: [this.customer? this.customer.id:  null, [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]*')]],
      customerName: [this.customer? this.customer.name: null, [Validators.required, Validators.pattern('^[a-zA-Z ]*')]],
      customerAddress: [this.customer? this.customer.address: null],
      customerEmail: [this.customer? this.customer.email: null, [Validators.required, Validators.email]],
      customerPhoneNumber: [this.customer? this.customer.phoneNumber: null, [Validators.pattern('^[0-9]{10}')]],
      otherDetails: [this.customer? this.customer.otherDetails: null, []],
    });
  }

  saveCustomer(){
    if(this.mode === 'edit'){
      this.customerService.updateCustomer(this.customerForm.value)
       .subscribe(res => {
         alert(res.data);
       })
    } else if(this.mode === 'add'){
      this.customerService.addCustomer(this.customerForm.value)
       .subscribe(res => {
         alert(res.data);
       })
    }
  }

}
