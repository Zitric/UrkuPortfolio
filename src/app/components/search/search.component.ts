import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductsService} from '../../providers/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent  {

  text: string = undefined;

  constructor( private activatedRoute: ActivatedRoute,
               private productsService: ProductsService) {

    activatedRoute.params.subscribe( params => {
      this.text = params.text;
      console.log( this.text );
      productsService.searchProduct( this.text );

    });

  }

}
