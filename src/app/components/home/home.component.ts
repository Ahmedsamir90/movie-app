import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentUser: any;
  trendingMoviesList: any = [];
  trendingTvShowList: any = [];
  trendingPersonsList: any = [];
  isLoading:boolean = true;


  imgPrefix: string = "https://image.tmdb.org/t/p/w500";

  constructor(private _MoviesService: MoviesService){}

  ngOnInit(): void {
    this._MoviesService.getTrending('movies').subscribe((data) => {

      for(let i=0 ; i< data.results.length ; i++){
        if(data.results[i].media_type != 'tv'){
          this.trendingMoviesList.push(data.results[i]);
          
        }
      }

    })

    this._MoviesService.getTrending('tv').subscribe((data) => {

      this.trendingTvShowList = data.results;
    })

   setTimeout(() => {
    this.isLoading = false;
   }, 1000);

  }

  showMovieID(movieId:string){
    console.log(movieId);
    
  }




}
