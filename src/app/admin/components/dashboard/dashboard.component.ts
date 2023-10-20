import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { AlertifyOptions, AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';


// declare var alertify : any ;  //Harici kütüphaneleri declare ederek kullanıyoruz...Fakat bunu bir service içerisinde inject ettik


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends BaseComponent implements OnInit{

  constructor(private alertify: AlertifyService,spinner: NgxSpinnerService){
    super(spinner)
  }

    

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom)
  }

  m(){

    this.alertify.message("siparişiniz oluşturuldu", MessageType.Error,Position.BottomLeft,3,false )

    // this.alertify.message( "Merhabasdasda", {
    //   messageType : MessageType.Succes,
    //   delay : 5,
    //   position : Position.BottomCenter
    // })
  }

  d(){
    this.alertify.dismiss();
  }

}
