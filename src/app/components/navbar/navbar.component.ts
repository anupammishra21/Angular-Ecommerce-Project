import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/service/cart-service.service';
import { StorageService } from "../../service/storage.service";
import { UserService } from "../../service/user.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userVal:any
  totalItem:number=0
  constructor(private storage:StorageService,private ser:UserService,private cart:CartServiceService) { }

  ngOnInit(): void {
    this.ser.user_profile().subscribe((res:any)=>{
      this.userVal=res.data
      console.log("values of profile",this.userVal);
      
    })

    this.cart.getProduct().subscribe((res:any)=>{
      this.totalItem=res.length;
      // console.log("..........",this.totalItem);
      
    })
  }
  logout(){
    this.storage.getDestroy()
    this.ser.user_profile().subscribe((res:any)=>{
      this.userVal=res.data
    })

   
    
  }

 

}
