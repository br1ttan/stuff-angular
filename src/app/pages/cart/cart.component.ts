import { ChangeDetectionStrategy, ChangeDetectorRef, Component, TemplateRef, ViewChild } from '@angular/core';
import { CartState, IProduct, TemplateService } from '@features';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent {
  @ViewChild('template')
  public template!: TemplateRef<unknown> | null;

  public get totalCount(): number {
    return this.cartState.totalCalculatedPrice;
  }

  public data$: Observable<IProduct[] | []> = this.cartState.getCart$;

  constructor(
    private readonly cartState: CartState,
    private readonly templateService: TemplateService,
    private readonly changeDetector: ChangeDetectorRef
  ) {}
  
  public ngAfterViewInit(): void {
    this.templateService.updateTemplate(this.template);

    this.changeDetector.markForCheck();
  }

  public onAddButtonClick(data: IProduct): void {
    this.cartState.update(data);
    this.changeDetector.detectChanges();
  }

  public onMinusButtonClick(data: IProduct): void {
    this.cartState.decrement(data.id);
    this.changeDetector.detectChanges();
  }
  
  public onRemoveButtonClick(data: IProduct): void {
    if (data.count && data.count > 1) {
      data.count -= 1;
      this.cartState.removeAndUpdate(data.id);
    } else {
      this.cartState.removeAndUpdate(data.id);
    }
  
    this.changeDetector.detectChanges();
  }
}
