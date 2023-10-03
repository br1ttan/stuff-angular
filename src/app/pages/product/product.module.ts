import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductRouting } from './product.routing';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './components';
import { GoodsComponent, LoaderComponent } from '@shared/components';

@NgModule({
  declarations: [
    ProductComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ProductRouting,
    GoodsComponent,
    LoaderComponent
  ]
})
export class ProductModule { }
