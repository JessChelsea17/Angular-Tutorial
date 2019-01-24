import { Component } from '@angular/core';

@Component({ // component annotation that add metadata
  selector: 'app-root', // selector to use in html
  templateUrl: './app.component.html', // template markup that will be rendered
  styleUrls: ['./app.component.scss'] // 
})
export class AppComponent {
  title = 'sample-app';
}
