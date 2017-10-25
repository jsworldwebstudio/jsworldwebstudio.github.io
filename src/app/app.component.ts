import { Component } from '@angular/core';
import { NavAreaComponent } from './components/nav-area/nav-area.component';
import { FooterAreaComponent } from './components/footer-area/footer-area.component';
import { MovieService } from './services/movie.service';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MovieService]
})
export class AppComponent { }
