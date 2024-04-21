import { Component, EventEmitter, Output } from '@angular/core';
import { faSearch, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { CategoryStoreItem } from '../../services/category/category.storeItem';
import { SearchKeyword } from '../../types/searchKeyword.type';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { CartStoreItem } from '../../services/cart/cart.storeItem';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  faSearch = faSearch;
  faUserCircle = faUserCircle;
  faShoppingCart = faShoppingCart;
  displayOptions: boolean = true;  
  @Output()
  keywordSearchClicked: EventEmitter<SearchKeyword> = new EventEmitter<SearchKeyword>();

    constructor(
      public categoryStore: CategoryStoreItem,
      public cartStore: CartStoreItem,
      private router: Router
    ) {
      this.router.events
      .pipe(filter((event)=>event instanceof NavigationEnd))
      .subscribe((event)=>{
        this.displayOptions =
        (event as NavigationEnd).url==='/home/products'?true:false;
      })
    }

  onKeywordSearch(categoryDropDown:any, searchInput:string){
    this.keywordSearchClicked.emit({categoryId: categoryDropDown, keyword:searchInput});
  }
  navigateToCart(){
    this.router.navigate(['home/cart']);
  }
}
