import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { BoxListenerDirective } from './directives';

@NgModule({
  declarations: [
    HeaderComponent,
    BoxListenerDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent
  ],
})
export class HeaderModule { }
