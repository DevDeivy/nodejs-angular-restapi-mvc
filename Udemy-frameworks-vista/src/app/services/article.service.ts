import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urlApi } from './urlApi';
import { Observable } from 'rxjs';
import { Article } from '../components/articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = urlApi.url;
  }

  getArticles(): Observable<any> {
    return this.http.get(`${this.url}getArticles`);
  }

  lastArticles(): Observable<any> {
    return this.http.get(`${this.url}getArticles/last`);
  }

  search(searchArticle: string): Observable<any>{
    return this.http.get(`${this.url}search/` + searchArticle);
  }

  saveArticle(article: any): Observable<any> {
    let params = JSON.stringify(article);
    return this.http.post(`${this.url}saveArticle/`, params);
  }

  CreateArticle(article: Article): Observable<any> {
    let params = JSON.stringify(article);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.url}save`, params, {headers: headers});
  }

  DeleteArticle(id: string): Observable<any>{
    return this.http.delete(`${this.url}getArticlesId/` + id);
  }
}