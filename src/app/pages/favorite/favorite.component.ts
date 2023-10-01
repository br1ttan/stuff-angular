import { ChangeDetectionStrategy, ChangeDetectorRef, Component, TemplateRef, ViewChild } from '@angular/core';
import { FavoriteState, IProduct, TemplateService } from '@features';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoriteComponent {
  @ViewChild('template')
  public template!: TemplateRef<unknown> | null;

  public data$: Observable<IProduct[] | []> = this.favoriteState.getFavorite$;

  constructor(
    private readonly favoriteState: FavoriteState,
    private readonly templateService: TemplateService,
    private readonly changeDetector: ChangeDetectorRef
  ) {}
  
  public ngAfterViewInit(): void {
    this.templateService.updateTemplate(this.template);

    this.changeDetector.markForCheck();
  }

  public onRemoveButtonClick(data: IProduct): void {
    this.favoriteState.removeAndUpdate(data.id);
  
    this.changeDetector.detectChanges();
  }
}
