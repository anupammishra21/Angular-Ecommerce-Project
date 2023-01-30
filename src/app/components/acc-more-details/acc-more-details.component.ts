import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartServiceService } from 'src/app/service/cart-service.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-acc-more-details',
  templateUrl: './acc-more-details.component.html',
  styleUrls: ['./acc-more-details.component.scss']
})
export class AccMoreDetailsComponent implements OnInit {
   sid:any
   id:any
   accDetailsIdCollect:any
   accDetailsIdCollect2:any
  constructor(private active:ActivatedRoute,private ser:ProductService,private cart:CartServiceService) { }

  ngOnInit(): void {
    this.active.paramMap.subscribe((params) => {
      this.sid = params.get('sid');
      this.id = params.get('id');
      this.accDetailsIdCollect = this.ser.product1.filter(
        (d: any) => d.brand_id == this.sid
      );
      // console.log("mnbvf : ",this.accDetailsIdCollect);
      this.accDetailsIdCollect2 = this.accDetailsIdCollect[0].prod.filter(
        (x: any) => x.prod_id == this.id
      );
      // console.log(this.accDetailsIdCollect2);
      this.accDetailsIdCollect2.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.prod_price})
      });
    });
  }

  addToCart(data:any){
    this.cart.addToCart(data)
  }
}
