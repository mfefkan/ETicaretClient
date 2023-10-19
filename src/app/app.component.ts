import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';

declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ETicaretClient';
  constructor(private toastrService: CustomToastrService) {

    toastrService.message("marhabaaaaa","asasdadlan", {
      messageType: ToastrMessageType.Error,
      position: ToastrPosition.BottomFullWidth
    });
    // toastrService.message("ayşe","fatma",ToastrMessageType.Info,ToastrPosition.BottomFullWidth);
    // toastrService.message("ayşe","fatma",ToastrMessageType.Info,ToastrPosition.BottomLeft);
    // toastrService.message("hayriye","fatma",ToastrMessageType.Info,ToastrPosition.TopCenter);

    
  }
}

//  $(document).ready(() => {
//    alert ("Hoşgeldiniz")
// })