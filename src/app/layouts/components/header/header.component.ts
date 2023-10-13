import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct, ProductApi } from '@features';
import { AppRouteEnum } from '@core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @ViewChild('inputElement')
  public inputElement!: ElementRef<HTMLInputElement>;
  
  public readonly routeEnum = AppRouteEnum;
  public data$: Observable<IProduct[] | []> = of([]);

  constructor(
    private readonly productApi: ProductApi,
    private readonly router: Router,
    private readonly changeDetector: ChangeDetectorRef
  ) {}

  public onItemClick(id: number): void {
    this.clearData();
    this.inputElement.nativeElement.value = '';

    this.router.navigateByUrl(`${this.routeEnum.Product}/${id}`);
  }

  public onInputChange(): void {
    const value = this.inputElement?.nativeElement.value;

    if (!value) {
      this.clearData();
    } else {
      this.data$ = this.productApi.getByTitle(value);
    }
  
    this.changeDetector.detectChanges();
  }

  public onCloseBox(): void {
    this.clearData();
  }

  public clearData(): void {
    this.data$ = of([]);
  }
}
