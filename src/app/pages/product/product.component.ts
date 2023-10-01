import { ChangeDetectionStrategy, Component, AfterViewInit, TemplateRef, ViewChild } from '@angular/core';
import { ProductApi, TemplateService } from '@features';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements AfterViewInit {
  @ViewChild('template')
  public template!: TemplateRef<unknown> | null;

  public productData$ = this.productApi.getAll();
  
  constructor(
    private readonly productApi: ProductApi,
    private readonly templateService: TemplateService
  ) {}

  public ngAfterViewInit(): void {
    this.templateService.updateTemplate(this.template);
  }
}
