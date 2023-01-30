import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { SwiperModule } from 'swiper/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CameraComponent } from './components/camera/camera.component';
import { CameraDetailsComponent } from './components/camera-details/camera-details.component';
import { DetailsComponent } from './components/details/details.component';
import { AccessoriesComponent } from './components/accessories/accessories.component';
import { AccessoriesDetailsComponent } from './components/accessories-details/accessories-details.component';
import { AccMoreDetailsComponent } from './components/acc-more-details/acc-more-details.component';
import { HomeComponent } from './components/home/home.component';
import { LenceComponent } from './components/lence/lence.component';
import { LenceDetailsComponent } from './components/lence-details/lence-details.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { NewproductsComponent } from './components/newproducts/newproducts.component';
import { SaleproductsComponent } from './components/saleproducts/saleproducts.component';
import { BlogsectionComponent } from './components/blogsection/blogsection.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewproductsdetailsComponent } from './components/newproductsdetails/newproductsdetails.component';
import { SalesproductsdetailsComponent } from './components/salesproductsdetails/salesproductsdetails.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { BuynowformComponent } from './components/buynowform/buynowform.component';
import { SortPipe } from './pipes/sort.pipe';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { FinalPageComponent } from './components/final-page/final-page.component'






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CameraComponent,
    CameraDetailsComponent,
    DetailsComponent,
    AccessoriesComponent,
    AccessoriesDetailsComponent,
    AccMoreDetailsComponent,
    HomeComponent,
    LenceComponent,
    LenceDetailsComponent,
    SearchbarComponent,
    NewproductsComponent,
    SaleproductsComponent,
    BlogsectionComponent,
    FooterComponent,
    NewproductsdetailsComponent,
    SalesproductsdetailsComponent,
    LoginComponent,
    RegistrationComponent,
    BuynowformComponent,
    SortPipe,
    CartItemComponent,
    FinalPageComponent

    
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,SwiperModule,ReactiveFormsModule,HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
