import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  private templateSubject = new BehaviorSubject<TemplateRef<unknown> | null>(null);
  template$ = this.templateSubject.asObservable();

  public updateTemplate(template: TemplateRef<unknown> | null) {
    this.templateSubject.next(template);
  }
}
