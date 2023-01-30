import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartServiceService } from 'src/app/service/cart-service.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-newproductsdetails',
  templateUrl: './newproductsdetails.component.html',
  styleUrls: ['./newproductsdetails.component.scss']
})
export class NewproductsdetailsComponent implements OnInit {
  collectedid:any
  pro:any

  constructor(private route:ActivatedRoute, private prodser:ProductService,private cart:CartServiceService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      this.collectedid=params.get('id')
      this.pro=this.prodser.newProducts.filter((data:any)=>data.prod_id==this.collectedid)
      console.log("collected id",this.pro);

      this.pro.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.prod_price})
      });
    })

  
  }
  addToCart(data:any){
    this.cart.addToCart(data)
  }

}
