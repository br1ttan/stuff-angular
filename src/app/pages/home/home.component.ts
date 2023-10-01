import { AfterViewInit, ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { ProductApi, TemplateService } from '@features';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements AfterViewInit {
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
