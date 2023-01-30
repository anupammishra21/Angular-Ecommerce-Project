import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-camera-details',
  templateUrl: './camera-details.component.html',
  styleUrls: ['./camera-details.component.scss']
})
export class CameraDetailsComponent implements OnInit {

  constructor(private cam:ProductService,private active:ActivatedRoute) { }
  prodId:any
  cid:any
  ngOnInit(): void {
    this.active.paramMap.subscribe((params)=>{
      this.prodId=params.get('pid')
      // console.log("id...",this.prodId);
      this.cid=this.cam.product.filter((data:any)=>data.prod_id==this.prodId)
      console.log("product id",this.cid);
      
      
    })
  }

}
