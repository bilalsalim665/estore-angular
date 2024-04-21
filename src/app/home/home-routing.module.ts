import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { ProductsGalleryComponent } from "./components/products-gallery/products-gallery.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";
import { CartComponent } from "./components/cart/cart.component";
import { SignupComponent } from "./components/user/signup/signup.component";
import { LoginComponent } from "./components/user/login/login/login.component";


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path:'products',
                component: ProductsGalleryComponent
            },
            {
                path:'product/:id',
                component: ProductDetailsComponent
            },
            {
                path:'cart',
                component: CartComponent
            },
            {
                path: 'signup',
                component: SignupComponent
            },
            {
                path: 'login',
                component: LoginComponent
            }
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {}

