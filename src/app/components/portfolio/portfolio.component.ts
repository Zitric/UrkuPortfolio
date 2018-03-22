import { Component } from '@angular/core';
import { ProductsService } from '../../providers/products.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styles: []
})
export class PortfolioComponent {

  constructor( public productsService: ProductsService ) { }


}
