import { Injectable, Component } from '@angular/core';
import {Jsonp} from '@angular/http';
import 'rxjs/Rx';
import * as moment from 'moment';

@Injectable()
export class MovieService {
  apikey: string;
  now_display: string;
  one_week_past_display: string;
  future_display: string;
  now: number;

  constructor(private _jsonp:Jsonp) {
    this.apikey = '81afbda1d68d879477495f66a71bde7f';
    //console.log('MovieService Initialized...');
    let now = moment();
    this.now_display = now.format('YYYY-MM-DD');
    this.one_week_past_display = now.subtract(1, 'weeks').format('YYYY-MM-DD');
    this.future_display = now.add(1, 'months').format('YYYY-MM-DD'); //strange, now is changed to 1 week before from prior line of code
    //console.log("Today's Date: ", this.now_display);
    //console.log("One Week before Today's Date is: ", this.one_week_past_display);
    //console.log("One Month from Today's Date is: ", this.future_display);
  }

  getPopular(){
    return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key='+this.apikey)
      .map(res => res.json());
  }
  
  getInTheaters(){
    //return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=2017-09-09&primary_release_date.lte=2017-10-13&api_key='+this.apikey)
    //  .map(res => res.json());
    return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte='+this.one_week_past_display+'&primary_release_date.lte='+this.now_display+'&api_key='+this.apikey)
      .map(res => res.json());
  }
  
  searchMovies(searchStr: string){
    return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query='+searchStr+'&sort_by=popularity.desc&api_key='+this.apikey)
      .map(res => res.json());
  }
  
  getMovie(id: string){
    return this._jsonp.get('https://api.themoviedb.org/3/movie/'+id+'?callback=JSONP_CALLBACK&api_key='+this.apikey)
      .map(res => res.json());
  }

}
