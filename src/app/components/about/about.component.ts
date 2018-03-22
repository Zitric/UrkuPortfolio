import { Component } from '@angular/core';
import { InfoService } from '../../providers/info.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent {

  constructor( public _infoService: InfoService ) { }


}
