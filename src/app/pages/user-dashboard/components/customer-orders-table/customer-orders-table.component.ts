import { Component, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import * as tableSettings from './constants';

@Component({
  selector: "ngx-customer-orders-table",
  templateUrl: "./customer-orders-table.component.html",
  styleUrls: ["./customer-orders-table.component.scss"]
})
export class CustomerOrdersTableComponent implements OnInit {
  source: LocalDataSource = new LocalDataSource();
  settings = tableSettings.settings;
  constructor() {}
  data = [
    {
      orderId: "order1",
      orderDate: "01/10/2019",
      orderCompletionDate: "05/10/2019",
      amount: 10000,
      advance: 3000,
      balance: 7000,
      orderProductDetails: "Door 1 order"
    },
    {
      orderId: "order2",
      orderDate: "02/10/2019",
      orderCompletionDate: "06/10/2019",
      amount: 10000,
      advance: 4000,
      balance: 6000,
      orderProductDetails: "Door 2 order"
    },
    {
      orderId: "order3",
      orderDate: "03/10/2019",
      orderCompletionDate: "07/10/2019",
      amount: 12000,
      advance: 4000,
      balance: 8000,
      orderProductDetails: "Door 3 order"
    }
  ];
  ngOnInit() {
    this.source.load(this.data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
