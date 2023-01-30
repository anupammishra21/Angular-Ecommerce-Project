
import { Component, OnInit } from '@angular/core';
import { ProductService } from "src/app/service/product.service";





@Component({
  selector: 'app-newproducts',
  templateUrl: './newproducts.component.html',
  styleUrls: ['./newproducts.component.scss'],
  
})
export class NewproductsComponent implements OnInit {
  
  pro:any=[]

  constructor(private proser:ProductService) { }

  ngOnInit(): void {
    this.pro=this.proser.newProducts
    console.log(this.pro);
    
  }

}
