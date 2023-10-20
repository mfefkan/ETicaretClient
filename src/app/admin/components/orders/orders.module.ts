import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { RouterModule } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';



@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:OrdersComponent}
    ])
  ]
})
export class OrdersModule  {


}
