import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private _HttpClient:HttpClient) { }

  getPeople(pageNumber:number):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/popular?api_key=c657287b055c076418bfc63c59f64465&page=${pageNumber}`);
  }
}
