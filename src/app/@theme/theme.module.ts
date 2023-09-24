import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts/layouts.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  
  ],
  declarations: [LayoutsComponent],
  exports: [LayoutsComponent]
})
export class ThemeModule { }
