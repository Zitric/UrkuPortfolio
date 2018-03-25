import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../providers/products.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: []
})
export class ItemComponent {

  item: any = undefined;
  cod: string = undefined;

  constructor( private route: ActivatedRoute,
               private productService: ProductsService,
               private router: Router) {

    route.params.subscribe( params => {

      productService.loadProduct( params.id )
        .subscribe( response => {
          this.item = response.json();
          this.cod = params.id;
          console.log( this.item );
        });
    });
  }

  nextProject() {
    const array = this.cod.split('-');
    if ( Number( array[1] ) < this.productService.products.length ) {
      array[1] = String( Number( array[1] ) + 1 );
      this.router.navigate(['/item', array.join('-') ]);
    } else {
      this.router.navigate(['/home']);
    }
  }

}
