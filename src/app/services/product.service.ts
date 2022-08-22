import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // bu import sayesinde bir backend e istekte bulunabiliriz
import { ProductResponseModel } from '../models/productResponseModel';
import { Observable } from 'rxjs';
// bir class injectable içeriyorsa enjekte edilebilen bir servis vardır
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'http://localhost:31322/api/products/getall';
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<ProductResponseModel> {
    return this.httpClient.get<ProductResponseModel>(this.apiUrl); // this en üstteki class a denk gelir
  }
}
