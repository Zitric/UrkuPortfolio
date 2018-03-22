import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductsService {

  products: any[] = [];
  loadingProducts = true;

  constructor( public http: Http ) {
    this.loadProducts();
  }

  public loadProducts() {

    this.loadingProducts = true;

    if ( this.products.length === 0) {
      this.http.get('https://urku-portfolio.firebaseio.com/products_idx.json')
        .subscribe( response => {
          console.log( response.json() );
          this.products = response.json();
          this.loadingProducts = false;
        });
    }

  }

}
