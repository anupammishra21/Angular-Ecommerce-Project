import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.scss']
})
export class AccessoriesComponent implements OnInit {

  constructor(private ser:ProductService) { }
acc!:any
  ngOnInit(): void {
    this.acc=this.ser.product1
  }

}
