import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccMoreDetailsComponent } from './components/acc-more-details/acc-more-details.component';
import { AccessoriesDetailsComponent } from './components/accessories-details/accessories-details.component';
import { AccessoriesComponent } from './components/accessories/accessories.component';
// import { CameraDetailsComponent } from './components/camera-details/camera-details.component';
import { CameraComponent } from './components/camera/camera.component';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { LenceDetailsComponent } from './components/lence-details/lence-details.component';
import { LenceComponent } from './components/lence/lence.component';
import { NewproductsComponent } from './components/newproducts/newproducts.component';
import { SaleproductsComponent } from './components/saleproducts/saleproducts.component';
import { BlogsectionComponent } from './components/blogsection/blogsection.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewproductsdetailsComponent } from './components/newproductsdetails/newproductsdetails.component';
import { SalesproductsdetailsComponent } from './components/salesproductsdetails/salesproductsdetails.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { BuynowformComponent } from './components/buynowform/buynowform.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { AuthGuard } from './authGuard/auth.guard';
import { FinalPageComponent } from './components/final-page/final-page.component';


const routes: Routes = [
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:'home',component:HomeComponent},
  {path:'camera',component:CameraComponent},
  // {path:'cameraDetails/:pid',component:CameraDetailsComponent},
  {path:'details/:id',component:DetailsComponent},
  {path:'accessories',component:AccessoriesComponent},
  {path:'accessoriesDetails/:poid',component:AccessoriesDetailsComponent},
  {path:'accMoreDetails/:sid/:id',component:AccMoreDetailsComponent},
  {path:'lence',component:LenceComponent},
  {path:'lenceDetails/:id',component:LenceDetailsComponent},
  {path:'newProducts',component:NewproductsComponent},
  {path:'newProductsDetails/:id',component:NewproductsdetailsComponent},
  {path:'saleproducts',component:SaleproductsComponent},
  {path:'saleproductsDetails/:id',component:SalesproductsdetailsComponent},
  {path:'blogsection',component:BlogsectionComponent},
  {path:'footer',component:FooterComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegistrationComponent},
  {path:'buyNow',component:BuynowformComponent,canActivate:[AuthGuard]},
  {path:'cartItem',component:CartItemComponent,canActivate:[AuthGuard]},
  {path:'finalPage',component:FinalPageComponent,canActivate:[AuthGuard]},
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
