import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',

  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName = '';
  createServer = false;
  newCreateServerStatus = 'New Server Not Created !';
  servers = ['Test 1', 'Test 2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  onCreateServer() {
    this.servers.push(this.serverName);
    this.createServer = true;
    this.newCreateServerStatus =
      'New Server Created ! Server name is : ' + this.serverName;
  }

  onUpdateServer(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  ngOnInit(): void {}
}
