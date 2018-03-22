import { Component } from '@angular/core';
import { InfoService } from '../../providers/info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent  {

  constructor( public _infoService: InfoService) { }


}
