import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from './models/news.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private serviceUrl = "https://hn.algolia.com/api/v1/search?tags=front_page";

  constructor(private http : HttpClient ) { }

  getNews(): Observable<News[]>{
    return this.http.get<News[]>(this.serviceUrl);
  } 
}
