import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //comment 4 : for style like template we can use inline Style but have to change styleUrls to style
  //comment 5 : at all inline codes precede and them execution first attribute
styles:[  `
h3 {
  color: dodgerblue;
}
`,]

  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-angular-app';
}
