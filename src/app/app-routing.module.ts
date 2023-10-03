import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRouteEnum } from '@core';
import { MainLayoutComponent } from './layouts/main-layout';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: AppRouteEnum.Home,
        loadChildren: () => import('@pages/home')
          .then((m) => m.HomeModule)
      },
      {
        path: AppRouteEnum.Cart,
        loadChildren: () => import('@pages/cart')
          .then((m) => m.CartModule)
      },
      {
        path: AppRouteEnum.Category,
        loadChildren: () => import('@pages/category')
          .then((m) => m.CategoryModule)
      },
      {
        path: AppRouteEnum.Product,
        loadChildren: () => import('@pages/product')
          .then((m) => m.ProductModule)
      },
      {
        path: AppRouteEnum.Profile,
        loadChildren: () => import('@pages/profile')
          .then((m) => m.ProfileModule)
      },
      {
        path: AppRouteEnum.Favorite,
        loadChildren: () => import('@pages/favorite')
          .then((m) => m.FavoriteModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
