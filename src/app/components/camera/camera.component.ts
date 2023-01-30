import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartServiceService } from 'src/app/service/cart-service.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
})
export class CameraComponent implements OnInit {
  product: any | undefined;
  productID!: string | null;
  prodnew_id!: any;
  prod!: any;
  sortType = 'asc';
  sortType2 = 'desc';

  sortOptions = [
    {
      title: 'Price: Low to High',
      asc: true,
    },
    {
      title: 'Price: High to Low',
      asc: false,
    },
  ];

  selectedSortOption: any;

  constructor(
    private cam: ProductService,
    private route: ActivatedRoute,
    private cart: CartServiceService
  ) {}

  ngOnInit(): void {
    this.prod = this.formatData(this.cam.product);
    this.prod.forEach((a: any) => {
      Object.assign(a, { quantity: 1, total: a.prod_price });
    });
    this.selectedSortOption = this.sortOptions[0];
    this.prod = this.sortData(this.prod, this.selectedSortOption.asc);
  }
  addToCart(data: any) {
    this.cart.addToCart(data);
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
      };
    });
  }

  onSearchTextEntered(searchValue: string) {
    const allProducts = this.sortData(
      this.formatData(this.cam.product),
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
