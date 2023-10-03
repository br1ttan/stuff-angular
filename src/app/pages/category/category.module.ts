import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { CategoryRouting } from './category.routing';
import { GoodsComponent, LoaderComponent, PosterComponent } from '@shared/components';

@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRouting,
    PosterComponent,
    GoodsComponent,
    LoaderComponent
  ]
})
export class CategoryModule { }
