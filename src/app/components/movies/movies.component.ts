import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popularList:Array<Object>;
  theatersList:Array<Object>;
  searchRes:Array<Object>;
  searchStr: string;


  constructor(public _movieService: MovieService) {
    this._movieService.getPopular().subscribe(res => {
      this.popularList = res.results;
      //console.log(res.results);
    });

    this._movieService.getInTheaters().subscribe(res => {
      this.theatersList = res.results;
      //console.log(res.results);
    });
  }

  ngOnInit() {
  }

  searchMovies(){
    if (this.searchStr){
      this._movieService.searchMovies(this.searchStr).subscribe(res =>{
        this.searchRes = res.results;
        //console.log(this.searchStr);
      });
    }
  }

}
