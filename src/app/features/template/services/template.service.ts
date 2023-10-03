import { Injectable, TemplateRef, } from '@angular/core';
import { GoodsComponent } from '@shared/components';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  public get getTemplate$(): Observable<TemplateRef<unknown> | null> {
    return this.template$.asObservable();
  }

  private readonly template$ = new BehaviorSubject<TemplateRef<unknown> | null>(null);

  public update(template: TemplateRef<unknown>) {
    this.template$.next(template);
  }
}
