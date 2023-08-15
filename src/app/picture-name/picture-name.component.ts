import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture-name',
  templateUrl: './picture-name.component.html',
  styleUrls: ['./picture-name.component.scss']
})
export class PictureNameComponent implements OnInit {
  textToDisplay = '';

  private fullText = 'Fabian Dürr';

  ngOnInit(): void {
    this.animateText();
  }

  animateText(): void {
    // Delay for half a second before starting the typing effect.
    setTimeout(() => {
      this.textToDisplay = this.fullText;
    }, 500);
  }
}
