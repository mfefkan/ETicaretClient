import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { ComponentsModule } from './components/components.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    ComponentsModule,
    RouterModule
  ],
  exports : [
    LayoutModule
  ]
})
export class AdminModule { }
//Eğerki bir modül bir başka modülü kendi içinde benimseyecekte o modülü import etmemiz gerekmektedir.