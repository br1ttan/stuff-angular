import { AfterViewInit, ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { ProductApi } from '@features';
import { BaseComponent } from '@pages/base.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent extends BaseComponent implements AfterViewInit {
  @ViewChild('template')
  public template!: TemplateRef<unknown> | null;

  public productData$ = this.productApi.getAll();

  constructor(
    private readonly productApi: ProductApi,
  ) {
    super();
  }

  public ngAfterViewInit(): void {
    this.updateTemplate(this.template);
  }
}
