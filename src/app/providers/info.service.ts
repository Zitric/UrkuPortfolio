import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class InfoService {

  info: any = {};
  loaded = false;
  team: any[] = [];


  constructor( public http: Http ) {

    this.loadInfo();
    this.loadAbout();

  }

  public loadInfo() {
    this.http.get('assets/data/info.page.json')
      .subscribe( data => {
        this.info = data.json();
        this.loaded = true;
      });
  }

  public loadAbout() {
    this.http.get('https://urku-portfolio.firebaseio.com/team.json')
      .subscribe( data => {
        this.team = data.json();
      });
  }

}
