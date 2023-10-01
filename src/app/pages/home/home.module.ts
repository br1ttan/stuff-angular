import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRouting } from './home.routing';
import { CategoriesComponent } from './components';
import { GoodsComponent, PosterComponent } from '@shared/components';

@NgModule({
  declarations: [
    HomeComponent,
    CategoriesComponent,
  ],
  imports: [
    CommonModule,
    HomeRouting,
    PosterComponent,
    GoodsComponent
  ],
})
export class HomeModule { }
