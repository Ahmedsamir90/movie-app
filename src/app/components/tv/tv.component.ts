import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
declare let $:any;

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
  
  popularTVShowsList:any[] = [];
  isLoading: boolean = false;
  imgPrefix: string = "https://image.tmdb.org/t/p/w500";
  currentPageNumber:number = 1;


 
  

  constructor(public _MoviesService: MoviesService, public _ActivatedRoute: ActivatedRoute, private _Router: Router) { }

  getMovies(page: number) {

    this.isLoading = true;

    this._MoviesService.getPopularMedia(page , "tv").subscribe((data) => {


      this.popularTVShowsList = data.results;

      console.log(this.popularTVShowsList);
      


    }, () => {
      this._Router.navigate(['notfound']);
    })

    setTimeout(() => {
      this.isLoading = false;
    }, 1000);



  }

  goToPage(page:number) {
    this._Router.navigate(['/tvshows', page]);
  }


  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe((params)=>{

      this.currentPageNumber = params.page;

      $('html, body').animate({
        scrollTop: 0
      }, 500);
  
  
      this.getMovies(params.page);
            
    })



    
    
     
  }

}
