import { Component, OnInit } from '@angular/core';
import {trigger, style, transition, animate, query, stagger} from '@angular/animations';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  animations: [
    trigger('servicesHeadingAnim',[
      transition('* => *', [
        query('.to-animate', style({ opacity: 0, transform: 'translateY(150px)'})),
        query('.to-animate', stagger('400ms',[
          animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)'}))
        ]))
      ])
    ]),
    trigger('servicesBodyAnim',[
      transition('* => *', [
        query('.box-services', style({ opacity: 0, transform: 'translateX(-50px)'})),
        query('.box-services', stagger('500ms',[
          animate('800ms 1.0s ease-out', style({ opacity: 1, transform: 'translateX(0)'}))
        ]))
      ])
    ])
    /*
    trigger('servicesBodyAnim',[
      transition('* => *', [
        query('.column1 .fh5co-post', style({ opacity: 0, transform: 'translateY(150px)'})),
        query('.column1 .fh5co-post', stagger('400ms',[
          animate('400ms 0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)'}))
        ])),
        query('.column2 .fh5co-post', style({ opacity: 0, transform: 'translateY(150px)'})),
        query('.column2 .fh5co-post', stagger('400ms',[
          animate('400ms 1.0s ease-out', style({ opacity: 1, transform: 'translateY(0)'}))
        ])),
        query('.column3 .fh5co-post', style({ opacity: 0, transform: 'translateY(150px)'})),
        query('.column3 .fh5co-post', stagger('400ms',[
          animate('400ms 1.5s ease-out', style({ opacity: 1, transform: 'translateY(0)'}))
        ])),
        query('.column1 .icon-shield', style({ opacity: 0, transform: 'translateY(150px)'})),
        query('.column1 .icon-shield', stagger('400ms',[
          animate('400ms 0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)'}))
        ])),
        query('.column2 .icon-shield', style({ opacity: 0, transform: 'translateY(150px)'})),
        query('.column2 .icon-shield', stagger('400ms',[
          animate('400ms 1.0s ease-out', style({ opacity: 1, transform: 'translateY(0)'}))
        ])),
        query('.column3 .icon-shield', style({ opacity: 0, transform: 'translateY(150px)'})),
        query('.column3 .icon-shield', stagger('400ms',[
          animate('400ms 1.5s ease-out', style({ opacity: 1, transform: 'translateY(0)'}))
        ]))
      ])
    ]),
    */
  ]
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
