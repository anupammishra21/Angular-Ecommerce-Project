import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/service/cart-service.service';
import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lence',
  templateUrl: './lence.component.html',
  styleUrls: ['./lence.component.scss'],
})
export class LenceComponent implements OnInit {
  lence: any;
  product: any | undefined;
  productID!: string | null;
  prodnew_id!: any;
  productList: any;
  constructor(private ser: ProductService, private cart: CartServiceService) {}
  prod!: any;
  sortType = 'asc';
  sortType2 = 'desc';

  sortOptions = [
    {
      title: 'Price- Low to High',
      asc: true,
    },
    {
      title: 'Price- High to Low',
      asc: false,
    },
  ];
  selectedSortOption: any;

  ngOnInit(): void {
    // this.lence=this.ser.product2
    this.prod = this.formatData(this.ser.product2);
    console.log(this.prod);
    this.prod.forEach((a: any) => {
      Object.assign(a, { quantity: 1, total: a.prod_price });
    });
    this.selectedSortOption = this.sortOptions[0];
    this.prod = this.sortData(this.prod, this.selectedSortOption.asc);
  }

  changeSort(option: any) {
    this.selectedSortOption = option;
    this.prod = this.sortData(this.prod, this.selectedSortOption.asc);
  }

  sortData(data: any, asc: boolean) {
    return data.sort((a: any, b: any) =>
      asc ? a.price - b.price : b.price - a.price
    );
  }

  formatData(data: any) {
    return data.map((e: any) => {
      return {
        ...e,
        price: e.prod_price,
        //.replace(/,/g, ''),
        // removing , from price
      };
    });
  }

  addToCart(data: any) {
    this.cart.addToCart(data);
  }

  // formatData(data: any) {
  //   return data.map((e: any) => {
  //     return {
  //       ...e,
  //       price: e.prod_price
  //       //.replace(/,/g, ''),
  //       // removing , from price
  //     };
  //   });
  // }

  onSearchTextEntered(searchValue: string) {
    const allProducts = this.sortData(
      this.formatData(this.ser.product2),
      this.selectedSortOption.asc
    );

    if (searchValue) {
      this.prod = allProducts.filter((data: any) => {
        return data.prod_name.toLowerCase().includes(searchValue);
      });
    } else {
      this.prod = allProducts;
    }
  }
}
