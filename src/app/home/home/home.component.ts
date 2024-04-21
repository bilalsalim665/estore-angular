import { Component } from '@angular/core';
import { CategoryStoreItem } from '../services/category/category.storeItem';
import { ProductStoreItem } from '../services/product/product.storeItem';
import { SearchKeyword } from '../types/searchKeyword.type';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(
    public categoriesStoreItem: CategoryStoreItem,
    public productsStoreItem: ProductStoreItem,
    private router: Router
  ) {
    this.categoriesStoreItem.loadCategories();
    this.productsStoreItem.loadProducts();

    this.router.events
    .pipe(filter(event=>event instanceof NavigationEnd))
    .subscribe((event)=>{
      if((event as NavigationEnd).url === '/home'){
        this.router.navigate(['/home/products']);
      }
    });
  }

  onSelectCategory(categoryId: any): void{
    this.productsStoreItem.loadProducts('mainCategoryId='+categoryId);
  }
  onSearchSelect(searchObj: SearchKeyword): void{
    console.log("search",searchObj);
    this.productsStoreItem.loadProducts(
      `mainCategoryId=${searchObj.categoryId}&keyword=${searchObj.keyword}`
    );
  }

}
