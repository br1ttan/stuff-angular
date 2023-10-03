import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartState, FavoriteState, IProduct, ProductApi } from '@features';
import { switchMap, map } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  public data$ = this.activatedRoute.params
    .pipe(
      map((params) => params['id']),
      switchMap((id) => this.productApi.getById(id))
    );

  public selectedImage = '';

  constructor(
    private readonly productApi: ProductApi,
    private readonly activatedRoute: ActivatedRoute,
    private readonly cartState: CartState,
    private readonly favoriteState: FavoriteState,
    private readonly changeDetector: ChangeDetectorRef
  ) {}

  public setSelectedImage(imageUrl: string): void {
    this.selectedImage = imageUrl;

    this.changeDetector.detectChanges();
  }

  public onAddButtonClick(data: IProduct): void {
    this.cartState.update(data);

    this.changeDetector.detectChanges();
  }
  
  public onFavoriteButtonClick(data: IProduct): void {
    this.favoriteState.update(data);
    
    this.changeDetector.detectChanges();
  }
}
