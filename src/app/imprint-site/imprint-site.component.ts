import { Component } from '@angular/core';

@Component({
  selector: 'app-imprint-site',
  templateUrl: './imprint-site.component.html',
  styleUrls: ['./imprint-site.component.scss']
})
export class ImprintSiteComponent {

  isMyClassVisible = true;
  isMyClassNoneVisible = false;

  openOverlay() {
    this.isMyClassVisible = false;
    this.isMyClassNoneVisible = true;
  }

  closeOverlay() {
    this.isMyClassVisible = true;
    this.isMyClassNoneVisible = false;
  }
}
