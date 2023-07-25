import { Component } from '@angular/core';



@Component({
  selector: 'app-index-overview',
  templateUrl: './index-overview.component.html',
  styleUrls: ['./index-overview.component.scss']

})


export class IndexOverviewComponent {
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
