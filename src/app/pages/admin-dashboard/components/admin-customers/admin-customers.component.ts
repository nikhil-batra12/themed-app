import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from "ng2-smart-table";
import * as tableSettings from './constants';
import { NbDialogService } from '@nebular/theme';
import { ManageCustomerComponent } from './manage-customer/manage-customer.component';
import { CustomerService } from '../../../shared/services/customer.service';

@Component({
  selector: 'ngx-admin-customers',
  templateUrl: './admin-customers.component.html',
  styleUrls: ['./admin-customers.component.scss']
})
export class AdminCustomersComponent implements OnInit {
  source: LocalDataSource = new LocalDataSource();
  settings = tableSettings.settings;
  constructor(private dialogService: NbDialogService, private customerService: CustomerService) {}
  data = [
    {
      id: "customer1",
      name: "First Customer",
      address: "abc road",
      email: "cust1@gmail.com",
      phoneNumber: 9898989898,
      otherDetails: "asdasldjlaksd",
    },
    {
      id: "customer2",
      name: "Second Customer",
      address: "def road",
      email: "cust2@gmail.com",
      phoneNumber: 9666666555,
      otherDetails: "asdasldjlaksd",
    },
    {
      id: "customer3",
      name: "Third Customer",
      address: "xyz road",
      email: "cust3@gmail.com",
      phoneNumber: 984111111,
      otherDetails: "asdasldjlaksd",
    }
  ];
  ngOnInit() {
    this.customerService.getCustomers().subscribe(res => {
      this.source.load(res.data);
    })
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
      this.customerService.deleteCustomer(event.data.id).subscribe(res => {
        this.source.remove(event.data);
        alert(res.data);
      })
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
