import { Component } from '@angular/core';
import { InfoService } from '../../providers/info.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent {

  year: number = new Date().getFullYear();

  constructor( public _infoService: InfoService ) { }

}
