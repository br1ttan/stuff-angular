import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout';
import { FooterModule, HeaderModule, SidebarModule, UserFormModule } from './components';

@NgModule({
  declarations: [
    MainLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,
    SidebarModule,
    FooterModule,
    UserFormModule
  ],
  exports: [
    MainLayoutComponent
  ]
})
export class LayoutsModule { }
