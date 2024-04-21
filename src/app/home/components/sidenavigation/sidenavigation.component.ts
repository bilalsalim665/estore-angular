import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { Category } from '../../types/category.type';
import { Subscription } from 'rxjs';
import { CategoryStoreItem } from '../../services/category/category.storeItem';

@Component({
  selector: 'app-sidenavigation',
  templateUrl: './sidenavigation.component.html',
  styleUrl: './sidenavigation.component.scss'
})
export class SidenavigationComponent implements OnDestroy{
  categories: Category[] = [];
  subscriptions: Subscription = new Subscription();
  @Output()
  subCategoryClicked: EventEmitter<number> = new EventEmitter<number>();

  constructor(public categoryStore: CategoryStoreItem){
    categoryStore.categories$.subscribe((categories)=>{
      this.categories = categories;
    });
  }
  
  getCategories(parentCategoryId?:number): Category[]{
    return this.categories.filter(
      (category)=> parentCategoryId?category.parent_category_id===parentCategoryId:category.parent_category_id===null
    );
  }

  onSubCategoryClick(subCategory: Category): void{
    
    this.subCategoryClicked.emit(subCategory.id);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
