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

    const promise = new Promise (( resolve, reject ) =>  {

      this.http.get('https://urku-portfolio.firebaseio.com/products_idx.json')
        .subscribe( response => {
          this.products = response.json();
          this.loadingProducts = false;
          resolve();
        });
    });

    return promise;

  }

  public loadProduct( cod: string ) {
    return this.http.get( 'https://urku-portfolio.firebaseio.com/products/' + cod + '.json' );
  }

  public searchProduct( text: string ) {

    console.log('Buscando producto');
    console.log(this.products.length);

    this.productsSearched = [];

    this.products.length === 0 ?
      this.loadProducts().then( () => {
        // the load finish
        this.filterProducts( text );
      })
      :
      this.filterProducts( text );


  }

  private filterProducts ( text: string) {
    this.products.forEach( products => {

      text = text.toLowerCase();
      if (products.categoria.indexOf( text ) >= 0 ||
          products.titulo.toLowerCase().indexOf( text ) >= 0 ) {
        console.log( products );
        this.productsSearched.push( products );
      }
    });
  }
}
