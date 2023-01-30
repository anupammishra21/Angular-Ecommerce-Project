import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/service/cart-service.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  product: any = [];
  grandTotal : number=0;
  constructor(private cart: CartServiceService) { }

  ngOnInit(): void {
    this.cart.getProduct().subscribe((res: any) => {
      this.product = res;
      this.grandTotal = this.cart.getTotalPrice();
    });
  }
  removeItem(data:any){
    this.cart.removeCartItem(data)
  }
 emptyCart(){
  this.cart.removeAllCart()
 } 

}
