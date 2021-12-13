import { Component } from '@angular/core';
@Component({ selector: 'app-server', templateUrl: './server.component.html' })
export class ServerComponent {
  //comment 1 : create serverStatus and serverId attributes to interpolation these data as String to HTMl file

  serverStatus: String = 'offline';
  serverId: Number = 1;
  getServerStatus() {
    return this.serverStatus;
  }
}
