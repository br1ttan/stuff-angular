import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { ErrorComponent } from '@shared/components';

export const routes: Routes = [
  {
    path: ':id',
    component: ProductComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductRouting { }
