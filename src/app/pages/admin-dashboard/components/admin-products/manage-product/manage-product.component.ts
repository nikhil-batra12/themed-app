import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NbDialogRef } from "@nebular/theme";
import { ProductService } from '../../../../shared/services/product.service';

@Component({
  selector: "ngx-manage-product",
  templateUrl: "./manage-product.component.html",
  styleUrls: ["./manage-product.component.scss"]
})
export class ManageProductComponent implements OnInit {
  productForm: FormGroup;
  @Input("mode") mode: String;
  @Input("product") product;

  fileData: File = null;
  previewUrl: any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;

  constructor(
    private fb: FormBuilder,
    protected ref: NbDialogRef<ManageProductComponent>,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.createForm();
  }

  dismissDialog() {
    this.ref.close();
  }

  createForm() {
    this.productForm = this.fb.group({
      productId: [
        this.product ? this.product.id : null,
        [Validators.required, Validators.pattern("^[a-zA-Z ]*")]
      ],
      name: [this.product ? this.product.name : null, [Validators.required]],
      description: [
        this.product ? this.product.description : null,
        [Validators.required]
      ],
      price: [
        this.product ? this.product.price : null,
        [Validators.required, Validators.pattern("^[0-9]*")]
      ],
      featuredImage: [this.product ? this.product.featuredImage: null, [Validators.required]]
    });
  }


  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.preview();
  }

  preview() {
    // Show preview
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = _event => {
      this.previewUrl = reader.result;
      this.productForm.patchValue({
        featuredImage: this.previewUrl
      });
    };
  }

  saveProduct() {
    let input = new FormData();
    if (this.productForm.valid) {
      const {productId, name, price, description} = this.productForm.value;
      input.append("id", productId);
      input.append("name", name);
      input.append("price", price);
      input.append("description", description);
      input.append("featuredImage", this.fileData);
    }
    if(this.mode === 'edit'){
      this.productService.updateProduct(input).subscribe(res => 
        alert(res.data));
    } else if(this.mode === 'add'){
      this.productService.addProduct(input).subscribe(res => 
        alert(res.data));
    }
  }
}
