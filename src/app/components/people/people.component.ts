import { PeopleService } from './../../services/people.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare let $: any;

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  popularPeopleList: any = [];
  isLoading: boolean = false;
  imgPrefix: string = "https://image.tmdb.org/t/p/w500";
  currentPageNumber: number = 1;

  constructor(public _PeopleService: PeopleService, public _ActivatedRoute: ActivatedRoute, private _Router: Router) { }

 

  getPeople(page: number) {

    this.isLoading = true;

    this._PeopleService.getPeople(page).subscribe((data) => {


      this.popularPeopleList = data.results;




    }, () => {
      this._Router.navigate(['notfound']);


    })

    setTimeout(() => {
      this.isLoading = false;
    }, 1000);



  }

  goToPage(page: number) {
    this._Router.navigate(['/people', page]);
  }


  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe((params) => {

      this.currentPageNumber = params.page;

      $('html, body').animate({
        scrollTop: 0
      }, 500);


      this.getPeople(params.page);

    })






  }


}
