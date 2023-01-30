import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartServiceService } from 'src/app/service/cart-service.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  constructor(private cam: ProductService, private active: ActivatedRoute,private cart:CartServiceService) {}
  sid: any;
  id: any;
  detailsIdCollect: any;
  detailsIdCollect2: any;
  ngOnInit(): void {
    this.active.paramMap.subscribe((params) => {
      // this.sid = params.get('sid');
      this.id = params.get('id');
      this.detailsIdCollect = this.cam.product.filter(
        (d: any) => d.prod_id == this.id
      );

      this.detailsIdCollect.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.prod_price})
      });
      // console.log("mnbvf : ",this.detailsIdCollect);
      // this.detailsIdCollect2 = this.detailsIdCollect[0].brand.filter(
      //   (x: any) => x.brand_id == this.id
      // );
      // console.log(this.detailsIdCollect2);
    });
  }
  addToCart(data:any){
    this.cart.addToCart(data)
  }
}
