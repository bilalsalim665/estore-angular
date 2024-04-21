import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { CatnavigationComponent } from './components/catnavigation/catnavigation.component';
import { SidenavigationComponent } from './components/sidenavigation/sidenavigation.component';
import { ProductsComponent } from './components/products/products.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CategoryService } from './services/category/category.service';
import { CategoryStoreItem } from './services/category/category.storeItem';
import { ProductStoreItem } from './services/product/product.storeItem';
import { ProductService } from './services/product/product.service';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { ProductsGalleryComponent } from './components/products-gallery/products-gallery.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartStoreItem } from './services/cart/cart.storeItem';
import { CartComponent } from './components/cart/cart.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/user/login/login/login.component';
import { UserService } from './services/users/user-service.service';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    CatnavigationComponent,
    SidenavigationComponent,
    ProductsComponent,
    ProductsGalleryComponent,
    ProductDetailsComponent,
    CartComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    SharedModule,
    HttpClientModule,
    RouterModule,
    
    HomeRoutingModule,
  ],
  providers: [
    CategoryService, 
    CategoryStoreItem, 
    ProductStoreItem,
    ProductService,
    CartStoreItem,
    UserService
  ]
})
export class HomeModule { }
