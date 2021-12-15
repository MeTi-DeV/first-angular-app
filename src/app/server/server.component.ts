import { Component } from '@angular/core';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`.online{
    color: #fff
  }`],
})
export class ServerComponent {
  serverStatus = 'offline';
  serverId: Number = 1;

  constructor() {

    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  getServerStatus() {
    return this.serverStatus;
  }


  getColor() {
    return this.serverStatus === 'online' ? 'Green' : 'Red';
  }
}
