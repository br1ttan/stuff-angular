import { Injectable } from '@angular/core';
import { IProduct } from '@features/products';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartState {
  public get totalCalculatedPrice(): number {
    const cartValue = this.cart$.getValue();
    
    return cartValue.reduce((total, product) => {
      return total + (product.price * (product.count || 1));
    }, 0);
  }

  public get getCart$(): Observable<IProduct[]> {
    return this.cart$.asObservable();
  }
  
  private readonly cart$ = new BehaviorSubject<IProduct[]>([]);

  public update(data: IProduct): void {
    const currentValue = this.cart$.getValue();
    const existingProduct = currentValue.find((product) => product.id === data.id);

    if (existingProduct) {
      existingProduct.count = (existingProduct.count || 0) + 1;
    } else {
      data.count = 1;
      currentValue.push(data);
    }

    this.cart$.next([...currentValue]);
  }

  public decrement(id: number): void {
    const currentValue = this.cart$.getValue();
    const existingProduct = currentValue.find((product) => product.id === id);

    if (existingProduct && existingProduct.count && existingProduct.count > 1) {
      existingProduct.count -= 1;
    } else {
      this.removeAndUpdate(id);
    }

    this.cart$.next([...currentValue]);
  }


  public removeAndUpdate(id: number): void {
    const updatedValue = this.cart$.getValue().filter((product) => product.id !== id);
    this.cart$.next(updatedValue);
  }
}
