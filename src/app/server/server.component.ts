import { Component } from '@angular/core';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  //comment 1 : here I make a css class to send it as key to ngClass
  styles: [`.online{
    color: #fff
  }`],
})
export class ServerComponent {
  serverStatus = 'offline';
  serverId: Number = 1;

  constructor() {
    //comment 2 : here defaine online and offline status with 50 chance between 'offline' and 'online' with random method

    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  getServerStatus() {
    return this.serverStatus;
  }
  //comment 3 : here define a function to set backgroundColor to each
  // server create and set them background color by status title it use in ngStyle

  getColor() {
    return this.serverStatus === 'online' ? 'Green' : 'Red';
  }
}
