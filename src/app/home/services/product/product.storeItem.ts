import { Injectable } from "@angular/core";
import { Product } from "../../types/products.type";
import { StoreItem } from "../../../shared/storeItem";
import { ProductService } from "./product.service";
import { Observable } from "rxjs";



@Injectable()
export class ProductStoreItem extends StoreItem<Product[]> {
    constructor( private productService: ProductService) {
        super([])
    }

    async loadProducts(query?: string){
        console.log("query",query);
        
        this.productService.getProductList(query).subscribe((products)=>{
            this.setValue(products);
        });
    }

    get products$(): Observable<Product[]>{
        return this.value$;
    }
    get products(): Product[]{
        return this.value;
    }

}