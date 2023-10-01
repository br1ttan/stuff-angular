import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductApi {
  private readonly apiUrl = 'https://api.escuelajs.co/api/v1/products';
  
  constructor(
    private readonly http: HttpClient
  ) {}

  public getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.apiUrl);
  }

  public getById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.apiUrl}/${id}`);
  }

  public getByTitle(title: string): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.apiUrl}?title=${title}`);
  }
  
  public getByCategoryId(id: number): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.apiUrl}?category=${id}&offset=0&title=&price_min=0&price_max=0`);
  }
}
