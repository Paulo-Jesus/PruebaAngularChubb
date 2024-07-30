import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Title } from '../interfaces/title.interface';
import { Authors } from '../interfaces/authors.interface';

@Injectable({
  providedIn: 'root'
})
export class PoetrydbServiceService {

  constructor(private httpClient : HttpClient) { }

  private baseURL : string = '';
  favorites: Title[] = [];

  getRandomTitles():Observable<Title[]>{
    const url = 'https://poetrydb.org/random/9/author,title.json'
    return this.httpClient.get<Title[]>(url);
  }

  getAuthors(): Observable<Authors>{
    const url = 'https://poetrydb.org/author'
    return this.httpClient.get<Authors>(url);
  }

  getTitlesByAuthor(author: string): Observable<Title[]>{
    const url = `https://poetrydb.org/author/${author}/title`;
    return this.httpClient.get<Title[]>(url);
  }

  editFavorites(titles: Title[]){
    this.favorites = titles;
  }

  getFavorites(): Title[]{
    return this.favorites = JSON.parse(localStorage.getItem('favorites')!) || [];
  }
}
