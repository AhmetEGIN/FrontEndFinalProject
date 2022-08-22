import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  dataLoaded = false;
  constructor(private productService: ProductService) {} // private yapmamızın sebebi dışardan product Componenti kullanılamasın
  // Constructor ın amacı ProductComponent ini bellekte oluşturmaktır yani instance ını oluşturmak yani newlemek gibi
  ngOnInit(): void {
    // bizim componentimiz ilk kez açıldığında ilk çalışan metottur.
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true;
    });
  }
}
