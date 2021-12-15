import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',

  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName = '';
  newCreateServerStatus = 'New Server Not Created !';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  onCreateServer() {
    this.newCreateServerStatus = 'New Server Created ! Server name is : ' + this.serverName;
  }
  // comment 1 : create new function to get values from user and pass to serverName
  // for call this function in <Input (input)> for (input) call this function
  onUpdateServer(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  ngOnInit(): void {}
}
