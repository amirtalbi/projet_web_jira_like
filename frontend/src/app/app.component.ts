import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Jirar';
  showNavbar=true;

  constructor(private readonly router: Router) {
    router.events.subscribe((val) => {
      if (router.url.includes('auth')) {
        this.showNavbar = false;
      }
    });
  }
}
