import { Component } from '@angular/core';
@Component({ selector: 'app-server', templateUrl: './server.component.html' })
export class ServerComponent {
  serverStatus: String = 'offline';
  serverId: Number = 1;
  getServerStatus() {
    return this.serverStatus;
  }
}
