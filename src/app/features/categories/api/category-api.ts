import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INamedCategory, ICategory } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CategoryApi {
  private apiUrl = 'https://api.escuelajs.co/api/v1/categories';

  constructor(private readonly http: HttpClient) { }

  public getAll(): Observable<INamedCategory[]> {
    return this.http.get<INamedCategory[]>(this.apiUrl);
  }

  public getById(id: number): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(this.apiUrl);
  }
}
