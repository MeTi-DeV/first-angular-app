//comment 1 : generate this Component by command "ng g c 'my- new-component-name'" it's automatically create all files for a new Component
import { Component, OnInit } from '@angular/core';

@Component({
  //comment 2 : several ways there are to define selector: as HTML Element
  //as HTML Atribute
  //as CSS Class
  // selector: `[app-servers]` // as HTML attribute
  // selector: `.app-servers` // as CSS class
  selector: 'app-servers',
  //comment 3 : we can use other component HTML file directory and don't use itself HTML directory
  //by use this inline component element for this example have to change templateUrl to template
  template: `<app-server></app-server><app-server></app-server>`,
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
