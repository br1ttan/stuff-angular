import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CategoryApi } from '@features';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesComponent {
  public data$ = this.categoryApi.getAll();

  constructor(
    private readonly categoryApi: CategoryApi
  ) {}
}
