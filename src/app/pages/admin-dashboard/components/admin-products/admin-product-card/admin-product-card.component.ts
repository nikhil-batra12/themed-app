import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "ngx-admin-product-card",
  templateUrl: "./admin-product-card.component.html",
  styleUrls: ["./admin-product-card.component.scss"]
})
export class AdminProductCardComponent implements OnInit {
  @Input() product;
  @Output() deletedProduct = new EventEmitter<any>();
  @Output() editedProduct = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}

  editProduct(productToBeEdited) {
    this.editedProduct.emit({ data: productToBeEdited });
  }

  deleteProduct(productToBeDeleted) {
    this.deletedProduct.emit(productToBeDeleted);
  }
}
