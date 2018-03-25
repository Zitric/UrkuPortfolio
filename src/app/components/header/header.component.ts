import { Component } from '@angular/core';
import { InfoService } from '../../providers/info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent  {

  constructor( public _infoService: InfoService,
               private router: Router ) { }

  searchProduct( text: string ) {

    this.router.navigate( ['search', text]);
  }

}
