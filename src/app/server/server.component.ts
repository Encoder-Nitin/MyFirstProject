import { Component } from "@angular/core";


@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
    .online {
      color : white
    }`]
})
export class ServerComponent {
  serverId: number=10;
  serverStatus: string ='offline';


  constructor(){
  this.serverStatus= Math.random() > 0.5 ? 'online' : 'offline';
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

 /* ValidateIPa{ddress(inputText) {
        var ipformat = /^(192)\.(168)\.(1)\.(250|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        if (inputText.value.match(ipformat)) {
          document.form1.text1.focus();
          return true;
        }
        else {
          alert("You have entered an invalid IP address!");
          form1.text1.focus();
          return false;
        }
      } */
}