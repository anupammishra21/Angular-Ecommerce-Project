import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  constructor() {}
  cartItemList: any = [];
  productList = new BehaviorSubject<any>([]);

  getProduct() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(product);
    this.productList.next(product);
  }
  addToCart(product: any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log('add to cart values..', this.cartItemList);
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total;
    });
    return grandTotal;
    
  }

  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.prod_id == a.prod_id) {
        this.cartItemList.splice(index, 1);
      }
    });
    this.productList.next(this.cartItemList);
  }

  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}
