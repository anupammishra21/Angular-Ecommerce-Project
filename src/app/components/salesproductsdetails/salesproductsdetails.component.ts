import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../../service/product.service";

@Component({
  selector: 'app-salesproductsdetails',
  templateUrl: './salesproductsdetails.component.html',
  styleUrls: ['./salesproductsdetails.component.scss']
})
export class SalesproductsdetailsComponent implements OnInit {
  pro:any
  collectedId:any

  constructor(private route: ActivatedRoute, private prodser:ProductService) {  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      this.collectedId=params.get('id')
      this.pro=this.prodser.saleProducts.filter((data:any)=>data.prod_id==this.collectedId)
      console.log("collected id",this.pro);
    })

  }

}
