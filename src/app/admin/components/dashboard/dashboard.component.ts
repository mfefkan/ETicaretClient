import { Component, OnInit } from '@angular/core';
import { AlertifyOptions, AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';


// declare var alertify : any ;  //Harici kütüphaneleri declare ederek kullanıyoruz...Fakat bunu bir service içerisinde inject ettik


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  constructor(private alertify: AlertifyService){

  }

    

  

  ngOnInit(): void {
   
  }

  m(){

   // this.alertify.message("asdfasdf", MessageType.Error,Position.BottomLeft,3,true )

    this.alertify.message( "Merhabasdasda", {
      messageType : MessageType.Succes,
      delay : 5,
      position : Position.BottomCenter
    })
  }

  d(){
    this.alertify.dismiss();
  }

}
