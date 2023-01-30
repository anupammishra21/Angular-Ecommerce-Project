import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/service/cart-service.service';
import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lence',
  templateUrl: './lence.component.html',
  styleUrls: ['./lence.component.scss'],
})
export class LenceComponent implements OnInit {
  lence:any
  product: any | undefined;
  productID!: string | null;
  prodnew_id!: any;
  productList: any;
  constructor(private ser: ProductService,private cart:CartServiceService) {}
  prod!: any;

  
  ngOnInit(): void {
    
    this.lence=this.ser.product2

    this.lence.forEach((a:any) => {
      Object.assign(a,{quantity:1,total:a.prod_price})
    });
  }

  addToCart(data:any){
    this.cart.addToCart(data)
  }

  // formatData(data: any) {
  //   return data.map((e: any) => {
  //     return {
  //       ...e,
  //       price: e.prod_price
  //       //.replace(/,/g, ''),
  //       // removing , from price
  //     };
  //   });
  // }


  onSearchTextEntered(searchValue: string){
    // const allProducts = this.formatData(this.lence.product);
    // if (searchValue) {
    //   this.prod= allProducts.filter((data:any)=>{
    //     return data.prod_name.toLowerCase().includes(searchValue)
    //   })
    //   console.log(this.prod);
      
    // }
    // else {
    //   this.prod = allProducts;
    // }
    if (searchValue) {
      this.lence = this.productList.filter((data: any) => {
        return data.prod_name.toLowerCase().includes(searchValue);
      });
    } else {
      this.productList = this.prodnew_id;
    }
  }

  }

