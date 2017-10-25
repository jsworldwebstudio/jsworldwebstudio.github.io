import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  //movie: Object;
  movie: Object = {};
  id: string;

  constructor(public router: ActivatedRoute, public _movieService: MovieService) {
    this.router.params.subscribe((params) => {
      this.id = params['id'];
    });
    
    this._movieService.getMovie(this.id).subscribe(movie => {
      this.movie = movie;
      //console.log(movie);
    });
    /*
    this._movieService.getMovie(this.id).subscribe(res => {
      this.movie = res.results;
      console.log(res.results);
    });
    */
    }
  ngOnInit() {
  }

}
