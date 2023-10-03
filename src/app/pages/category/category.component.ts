import { ChangeDetectionStrategy, Component, AfterViewInit, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct, ProductApi, TemplateService } from '@features';
import { BaseComponent } from '@pages/base.component';
import { map, switchMap, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryComponent extends BaseComponent implements AfterViewInit {
  @ViewChild('template')
  public template!: TemplateRef<unknown> | null;

  public data$: Observable<IProduct[] | null> = this.activatedRoute.params
    .pipe(
      map((params) => (
        this.categoryId = params['id'],
        params['id']
      )),
      switchMap((id) => this.productApi.getByCategoryId(id)),
      map((data) => data.slice(this.categoryId, this.categoryId + 5))
    );

  private categoryId: number = 0;

  constructor(
    private readonly productApi: ProductApi,
    private readonly activatedRoute: ActivatedRoute,
  ) {
    super();
  }

  public ngAfterViewInit(): void {
    this.updateTemplate(this.template);
  }
}
