import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'maewnams-cafe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Welcome to MaewnamS Cafe';
  plainLayout = false;

  constructor(router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log('Welcome guest !! We will have member system soon...');
      }
    });
  }

  ngOnInit() {}
}
