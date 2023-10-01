import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { CategoryRouting } from './category.routing';
import { GoodsComponent, PosterComponent } from '@shared/components';

@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRouting,
    PosterComponent,
    GoodsComponent
  ]
})
export class CategoryModule { }
