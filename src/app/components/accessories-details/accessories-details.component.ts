import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-accessories-details',
  templateUrl: './accessories-details.component.html',
  styleUrls: ['./accessories-details.component.scss']
})
export class AccessoriesDetailsComponent implements OnInit {
  pid:any
  cid:any
  constructor(private ser:ProductService,private active:ActivatedRoute) { }

  ngOnInit(): void {
    this.active.paramMap.subscribe((params)=>{
      this.pid=params.get('poid')
      // console.log("prod id",this.pid);
      this.cid=this.ser.product1.filter((data:any)=>data.brand_id==this.pid)
      console.log("prod id..",this.cid);
      
      
    })
  }

}
