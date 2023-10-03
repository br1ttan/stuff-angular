import { AfterContentChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, TemplateRef, ViewChild } from '@angular/core';
import { FavoriteState, IProduct } from '@features';
import { BaseComponent } from '@pages/base.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoriteComponent extends BaseComponent implements AfterViewInit {
  @ViewChild('template')
  public template!: TemplateRef<unknown> | null;

  public data$ = this.favoriteState.getFavorite$;

  constructor(
    private readonly favoriteState: FavoriteState,
    private readonly changeDetector: ChangeDetectorRef
  ) {
    super();
  }
  
  public ngAfterViewInit(): void {
    this.updateTemplate(this.template);

    this.changeDetector.detectChanges();
  }

  public onRemoveButtonClick(data: IProduct): void {
    this.favoriteState.removeAndUpdate(data.id);
  
    this.changeDetector.detectChanges();
  }
}
