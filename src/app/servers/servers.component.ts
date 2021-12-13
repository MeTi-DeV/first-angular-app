import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',

  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  newCreateServerStatus = 'New Server Not Created !'
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  //comment 1 : an other topic in data binding is Event topic
  // here create a function to onclickable button and show an Event on Webpage
  onCreateServer(){

this.newCreateServerStatus="New Server Created !";
}
  ngOnInit(): void {}
}
