import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from "ng2-smart-table";
import * as tableSettings from './constants';
import { NbDialogService } from '@nebular/theme';
import { ManageCustomerComponent } from './manage-customer/manage-customer.component';

@Component({
  selector: 'ngx-admin-customers',
  templateUrl: './admin-customers.component.html',
  styleUrls: ['./admin-customers.component.scss']
})
export class AdminCustomersComponent implements OnInit {
  source: LocalDataSource = new LocalDataSource();
  settings = tableSettings.settings;
  constructor(private dialogService: NbDialogService) {}
  data = [
    {
      customerId: "customer1",
      customerName: "First Customer",
      customerAddress: "abc road",
      customerEmail: "cust1@gmail.com",
      customerPhoneNumber: 9898989898,
      otherDetails: "asdasldjlaksd",
    },
    {
      customerId: "customer2",
      customerName: "Second Customer",
      customerAddress: "def road",
      customerEmail: "cust2@gmail.com",
      customerPhoneNumber: 9666666555,
      otherDetails: "asdasldjlaksd",
    },
    {
      customerId: "customer3",
      customerName: "Third Customer",
      customerAddress: "xyz road",
      customerEmail: "cust3@gmail.com",
      customerPhoneNumber: 984111111,
      otherDetails: "asdasldjlaksd",
    }
  ];
  ngOnInit() {
    this.source.load(this.data);
  }

  addCustomer(event, mode='add') {
    const customer= event.data;
    this.dialogService.open(ManageCustomerComponent, {
      context: {
        customer,
        mode
      },
    });
  }

  deleteCustomer(event){
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
