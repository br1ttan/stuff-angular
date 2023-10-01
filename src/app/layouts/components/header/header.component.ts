import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IProduct, ProductApi } from '@features';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  public data$ = new Observable<IProduct[] | []>();

  constructor(
    private readonly productApi: ProductApi
  ) {}

  public onClearValue(): void {
    this.data$ = of([]);
  }

  public onInputChange(value: string): void {
    if (!value) {
      this.onClearValue();
      
      return;
    }
    
    this.data$ = this.productApi.getByTitle(value);
  }
}
