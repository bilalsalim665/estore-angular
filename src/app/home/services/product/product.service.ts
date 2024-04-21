import { Injectable } from '@angular/core';
import { Product } from '../../types/products.type';
import { products } from '../../sampleData/products.data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Environments, EnvironmentType } from '../../../shared/environments';

@Injectable()
export class ProductService {

  constructor(private httpCLient: HttpClient) { }

  getProductList(query?: string): Observable<Product[]>{
    let url:string = Environments[EnvironmentType]+'products';
    if(query){
      url+='?'+query
    }
console.log("url",url);

    return this.httpCLient.get<Product[]>(url);
  }

  getProduct(id: number): Observable<Product[]>{

    return this.httpCLient.get<Product[]>(Environments[EnvironmentType]+'products/'+id);
  }
}
