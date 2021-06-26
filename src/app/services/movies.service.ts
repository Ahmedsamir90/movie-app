import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }


  getTrending(mediaType:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=c657287b055c076418bfc63c59f64465`);
  }

  getMediaDetails(mediaType:string , mediaID:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${mediaID}?api_key=c657287b055c076418bfc63c59f64465`)
  }

  getPopularMedia(pageNumber:number , mediaType:string):Observable<any>{
   return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/popular?api_key=c657287b055c076418bfc63c59f64465&language=en-US&page=${pageNumber}`);
  }

}
