import { Component } from '@angular/core';
import { ProductStoreItem } from '../../services/product/product.storeItem';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartStoreItem } from '../../services/cart/cart.storeItem';
import { Product } from '../../types/products.type';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  faShoppingCart = faShoppingCart;
  constructor(
    public productsStore: ProductStoreItem,
    private cart: CartStoreItem
  ){
    
  }

  addToCart(product: Product){
    this.cart.addProduct(product);
  }
}
