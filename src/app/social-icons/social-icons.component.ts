import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.scss']
})
export class SocialIconsComponent {
  constructor(private router: Router) { }
  goToApp() {
    this.router.navigate(['../app/contact']);  // '/app' is the route path to the component.
  }
}

