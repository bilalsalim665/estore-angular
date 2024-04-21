import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../types/products.type';
import { Subscription } from 'rxjs';
import { ProductService } from '../../services/product/product.service';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartStoreItem } from '../../services/cart/cart.storeItem';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit,OnDestroy{
  product: Product;
  subscriptions: Subscription = new Subscription();

  faShoppingCart = faShoppingCart;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private cart: CartStoreItem
  ){

  }

  ngOnInit(){
    const id: number = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log("activated id",id);
    
    this.subscriptions.add(
      this.productService.getProduct(id).subscribe((products)=>{
        this.product = products[0];
        console.log("product",products);
        
      })      
    );
  }

  addToCart(){
    this.cart.addProduct(this.product);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
