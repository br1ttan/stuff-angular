import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CategoryApi } from '@features';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  public data$ = this.categoryApi.getAll();

  constructor(
    private readonly categoryApi: CategoryApi
  ) {}
}
