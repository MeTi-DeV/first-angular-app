import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']


})
export class AppComponent {
  userName = '';
  title = 'first-angular-app';
  log = [] as any;
  showDetails = false;
  onToggleAddItem = () => {
    this.showDetails = !this.showDetails;
 this.log.push(this.log.length + 1)
  };
  // onNewUser
}
