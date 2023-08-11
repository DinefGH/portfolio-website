import { Component, Renderer2, ElementRef, AfterViewInit } from '@angular/core';





@Component({
  selector: 'app-index-overview',
  templateUrl: './index-overview.component.html',
  styleUrls: ['./index-overview.component.scss']

})

export class IndexOverviewComponent implements AfterViewInit {

  isMyClassVisible = true;
  isMyClassNoneVisible = false;

  currentSection: string = 'section1';
  sections: any[] = [];

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit() {
    this.sections = this.el.nativeElement.querySelectorAll('.section');
    this.trackScrolling();
  }

  trackScrolling() {
    window.addEventListener('scroll', () => {
      let currentSection: any = null;

      this.sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3) && pageYOffset < (sectionTop + sectionHeight / 3)) {
          currentSection = section;
        }
      });

      if (currentSection) {
        const id = currentSection.getAttribute('id');
        const activeLinks = this.el.nativeElement.querySelectorAll(`.headlines-navbar a.active`);
        if (activeLinks.length) {
            this.renderer.removeClass(activeLinks[0], 'active');
        }
        const newActiveLink = this.el.nativeElement.querySelector(`.headlines-navbar a[href="#${id}"]`);
        this.renderer.addClass(newActiveLink, 'active');
      }
    });
}
  openOverlay() {
    this.isMyClassVisible = false;
    this.isMyClassNoneVisible = true;
  }

  closeOverlay() {
    this.isMyClassVisible = true;
    this.isMyClassNoneVisible = false;
  }
}

