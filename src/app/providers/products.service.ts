import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductsService {

  products: any[] = [];
  productsSearched: any[] = [];
  loadingProducts = true;

  constructor( public http: Http ) {
    this.loadProducts();
  }

  public loadProducts() {

    this.loadingProducts = true;

    if ( this.products.length === 0) {
      this.http.get('https://urku-portfolio.firebaseio.com/products_idx.json')
        .subscribe( response => {
          this.products = response.json();
          this.loadingProducts = false;
        });
    }

  }

  public loadProduct( cod: string ) {
    return this.http.get( 'https://urku-portfolio.firebaseio.com/products/' + cod + '.json' );
  }

  public searchProduct( text: string ) {

    console.log('Buscando producto');
    console.log(this.products.length);

    if ( this.products.length === 0 ) {
      this.loadProducts();
    }

    this.products.forEach( products => {
      console.log( products );
    });
  }

}
