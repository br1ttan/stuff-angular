import { Injectable } from '@angular/core';
import { IProduct } from '@features/products';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteState {
  public get getFavorite$(): Observable<IProduct[]> {
    return this.favorite$.asObservable();
  }
  
  private readonly favorite$ = new BehaviorSubject<IProduct[]>([]);

  public update(data: IProduct): void {
    const currentValue = this.favorite$.getValue();
    const existingProduct = currentValue.find((product) => product.id === data.id);

    if (existingProduct) {
      existingProduct.count = (existingProduct.count || 0) + 1;
    } else {
      data.count = 1;
      currentValue.push(data);
    }

    this.favorite$.next([...currentValue]);
  }

  public removeAndUpdate(id: number): void {
    const updatedValue = this.favorite$.getValue().filter((product) => product.id !== id);
    
    this.favorite$.next(updatedValue);
  }
}
