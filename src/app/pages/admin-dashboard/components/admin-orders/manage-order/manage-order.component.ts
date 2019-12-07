import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-manage-order',
  templateUrl: './manage-order.component.html',
  styleUrls: ['./manage-order.component.scss']
})
export class ManageOrderComponent implements OnInit {
  orderForm: FormGroup;
  @Input('mode') mode: String;
  @Input('order') order;
  constructor(private fb: FormBuilder,protected ref: NbDialogRef<ManageOrderComponent>) { }

  ngOnInit() {
    this.createForm();
  }

  dismissDialog(){
    this.ref.close();
  }

  createForm() {
    this.orderForm = this.fb.group({
      orderId: [this.order? this.order.id:  null, [Validators.required, Validators.pattern('^[a-zA-Z ]*')]],
      orderDate: [this.order? this.order.date: null, [Validators.required]],
      completionDate: [this.order? this.order.completionDate: null],
      amount: [this.order? this.order.amount: null, [Validators.required, Validators.pattern('^[0-9]{10}')]],
      advance: [this.order? this.order.advance: null, [Validators.pattern('^[0-9]{10}')]],
      balance: [this.order? this.order.balance: null, [Validators.pattern('^[0-9]{10}')]],
      productDetails: [this.order? this.order.productDetails: null, [Validators.required]],
      customerId: [this.order? this.order.customerId: null, Validators.maxLength(300)],
      coupon: [this.order? this.order.coupon: null, Validators.maxLength(300)]
    });
  }

  saveOrder(){
    console.log(this.orderForm.value);
  }

}
