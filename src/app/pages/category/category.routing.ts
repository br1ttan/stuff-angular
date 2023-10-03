import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category.component';
import { ErrorComponent } from '@shared/components';

export const routes: Routes = [
  {
    path: ':id',
    component: CategoryComponent
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
export class CategoryRouting { }
