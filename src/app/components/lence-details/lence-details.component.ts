import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartServiceService } from 'src/app/service/cart-service.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-lence-details',
  templateUrl: './lence-details.component.html',
  styleUrls: ['./lence-details.component.scss']
})
export class LenceDetailsComponent implements OnInit {
  collectedId:any
  store:any
  constructor(private ser:ProductService,private active:ActivatedRoute,private cart:CartServiceService) { }

  ngOnInit(): void {
    this.active.paramMap.subscribe((params)=>{
      this.collectedId=params.get('id')
      this.store=this.ser.product2.filter((data:any)=>data.prod_id==this.collectedId)
      console.log("collected id",this.store);
      
    })
    this.store.forEach((a:any) => {
      Object.assign(a,{quantity:1,total:a.prod_price})
    });

  }
  addToCart(data:any){
    this.cart.addToCart(data)
  }

}
