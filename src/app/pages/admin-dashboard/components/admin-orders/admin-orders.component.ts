import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from "ng2-smart-table";
import * as tableSettings from './constants';
import { NbDialogService } from '@nebular/theme';
import { ManageOrderComponent } from './manage-order/manage-order.component';


@Component({
  selector: 'ngx-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss']
})
export class AdminOrdersComponent implements OnInit {
  source: LocalDataSource = new LocalDataSource();
  settings = tableSettings.settings;
  constructor(private dialogService: NbDialogService) {}
  data = [
    {
      orderId: "order1",
      orderDate: "01/10/2019",
      orderCompletionDate: "05/10/2019",
      amount: 10000,
      advance: 3000,
      balance: 7000,
      orderProductDetails: "Door 1 order",
      customerId: "c1",
      coupon: "Coupon1"
    },
    {
      orderId: "order2",
      orderDate: "02/10/2019",
      orderCompletionDate: "06/10/2019",
      amount: 10000,
      advance: 4000,
      balance: 6000,
      orderProductDetails: "Door 2 order",
      customerId: "c2",
      coupon: "coupon2"
    },
    {
      orderId: "order3",
      orderDate: "03/10/2019",
      orderCompletionDate: "07/10/2019",
      amount: 12000,
      advance: 4000,
      balance: 8000,
      orderProductDetails: "Door 3 order",
      customerId: "c3",
      coupon: "Coupon3"
    }
  ];
  ngOnInit() {
    this.source.load(this.data);
  }

  addOrder(event, mode='add') {
    const order= event.data;
    this.dialogService.open(ManageOrderComponent, {
      context: {
        order,
        mode
      },
    });
  }

  deleteOrder(event){
    if(this.onDeleteConfirm()){
      this.source.remove(event.data);
    }
  }

  onDeleteConfirm(): boolean {
    if (window.confirm("Are you sure you want to delete?")) {
      return true;
    } else {
      return false;
    }
  }
}
