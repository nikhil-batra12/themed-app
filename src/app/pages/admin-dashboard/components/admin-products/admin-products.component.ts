import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../../shared/services/product.service";
import { NbDialogService } from "@nebular/theme";
import { ManageProductComponent } from "./manage-product/manage-product.component";

@Component({
  selector: "ngx-admin-products",
  templateUrl: "./admin-products.component.html",
  styleUrls: ["./admin-products.component.scss"]
})
export class AdminProductsComponent implements OnInit {
  products = [];
  productsPerRow = [];
  constructor(
    private productService: ProductService,
    private dialogService: NbDialogService
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(res => {
      this.products = res.data.products;
      this.computeProductsPerRow();
    });
  }

  deleteProduct(productData) {
    const { id } = productData;
    if (this.onDeleteConfirm()) {
      this.products = this.products.filter(product => product.id !== id);
      this.computeProductsPerRow();
    }
  }

  onDeleteConfirm(): boolean {
    if (window.confirm("Are you sure you want to delete?")) {
      return true;
    } else {
      return false;
    }
  }

  addProduct(event, mode = "add") {
    const product = event ? event.data : null;
    this.dialogService.open(ManageProductComponent, {
      context: {
        product,
        mode
      }
    });
  }

  private computeProductsPerRow() {
    const resultArr = [];
    let j = -1;
    for (let i = 0; i < this.products.length; i++) {
      if (i % 4 === 0) {
        j++;
        resultArr[j] = [];
        resultArr[j].push(this.products[i]);
      } else {
        resultArr[j].push(this.products[i]);
      }
    }
    this.productsPerRow = resultArr;
  }
}
