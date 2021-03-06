import { MoviesService } from '../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-media-details',
  templateUrl: './media-details.component.html',
  styleUrls: ['./media-details.component.scss']
})
export class MediaDetailsComponent implements OnInit {

  mediaType: string = '';
  movieID: string = '';
  movieDetails: any = {};
  tvDetails: any = {};
  tvID:string = '';
  imgPrefix: string = "https://image.tmdb.org/t/p/w500";
  mediaGenres: any[] = [];
  imdbPrefix: string = 'https://www.imdb.com/title/';
  isLoading:boolean = true



  constructor(private _MoviesService: MoviesService, private _ActivatedRoute: ActivatedRoute) {
   }

 

  ngOnInit(): void {
    this.mediaType = this._ActivatedRoute.snapshot.params.type;

    if (this.mediaType == "movie") {
      this.movieID = this._ActivatedRoute.snapshot.params.id;
      this._MoviesService.getMediaDetails("movie",this.movieID).subscribe((response) => {
        this.movieDetails = response;
        this.mediaGenres = response.genres;
      })
    } else {
      this.tvID = this._ActivatedRoute.snapshot.params.id;
      this._MoviesService.getMediaDetails("tv",this.tvID).subscribe((response) => {
        this.tvDetails = response;
        this.mediaGenres = response.genres;
      })   
    }

    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

}
