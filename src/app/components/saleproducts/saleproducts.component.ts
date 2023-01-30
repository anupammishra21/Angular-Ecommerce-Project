import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/service/cart-service.service';
import { ProductService } from "../../service/product.service";

@Component({
  selector: 'app-saleproducts',
  templateUrl: './saleproducts.component.html',
  styleUrls: ['./saleproducts.component.scss']
})
export class SaleproductsComponent implements OnInit {
  products!:any

  constructor(private saleprod : ProductService,private cart:CartServiceService) { }

  ngOnInit(): void {
    this.products=this.saleprod.saleProducts
    console.log("products", this.products);
     
    this.products.forEach((a:any) => {
      Object.assign(a,{quantity:1,total:a.prod_price})
    });

  }
  addToCart(data:any){
    this.cart.addToCart(data)
  }



}
