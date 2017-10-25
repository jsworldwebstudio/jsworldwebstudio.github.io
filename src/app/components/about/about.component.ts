import { Component, OnInit } from '@angular/core';
import {trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('aboutAnim',[
      transition('* => *', [
        query('.bounceAnim', style({ opacity: 0})),
        query('.bounceAnim', stagger('500ms',[
          animate('1s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75px)', offset: 0}),
            style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))
        ]))
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {
  items = [];

  constructor() { 
    this.items = ['Logos', 'Mobile Applications', 'eCommerce Websites', 'Brochure/Informational Websites', 'Progressive Web Applications']
  }

  ngOnInit() {
  }

}
