import { Component } from '@angular/core';
import { ProductStoreItem } from '../../services/product/product.storeItem';

@Component({
  selector: 'app-products-gallery',
  templateUrl: './products-gallery.component.html',
  styleUrl: './products-gallery.component.scss'
})
export class ProductsGalleryComponent {

  constructor(
    public productsStoreItem: ProductStoreItem
  ) {
    this.productsStoreItem.loadProducts();
  }

  onSelectSubCategory(subCategoryId: any): void{
    this.productsStoreItem.loadProducts('subCategoryId='+subCategoryId);
  }

}
