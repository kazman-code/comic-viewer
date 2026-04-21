import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Comic {

  private baseUrl = 'https://akabab.github.io/superhero-api/api';

  constructor(private http: HttpClient) {}

  getComics(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all.json`);
  }

  getComicById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/id/${id}.json`);
  }
}
