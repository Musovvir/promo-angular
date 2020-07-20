import { Component } from '@angular/core';
import {PromoService} from "./promo.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  prefix: any;
  pathToAssets = 'https://cdn.ramman.net/flexy-view/viskhan/promo/1.01/assets/';

  constructor(private service: PromoService) { }

  forHeader() {
    return this.service.forHeader;
  }

  forFooter() {
    return this.service.forFooter;
  }

  forCarousel() {
    return this.service.forCarousel;
  }

  forOffer() {
    return this.service.forOffer;
  }

  forServices() {
    return this.service.forServices;
  }

  forAbout() {
    return this.service.forAbout;
  }

  forSkills() {
    return this.service.forSkills;
  }

  clicker = (item) => {
    console.log(item);
  }
}
