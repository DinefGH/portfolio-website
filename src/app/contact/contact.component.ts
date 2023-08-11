import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import * as Aos from 'aos';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!:ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;
  
  showDialog: boolean = false;
  showDialogNotSent: boolean = false;
  userInputName: string = '';
  userInputEmail: string = '';
  userInputMessage: string = '';
  canSend: boolean = true;
  cannotSend: boolean = false;
  isButtonDisabled: boolean = false;
  inputValueName: string = '';
  inputValueEmail: string = '';
  inputValueText: string = '';

  emailFormControl = new FormControl('', [
    Validators.required, 
    Validators.email
  ]);
  constructor () {}

  ngOnInit(): void {

    Aos.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      
    
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 320, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    
    });

  }
    async sendMail(event: SubmitEvent) {
      event.preventDefault();

      
      

      // console.log('Sending mail', this.myForm);
      let nameField = this.nameField.nativeElement;
      let emailField = this.emailField.nativeElement;
      let messageField = this.messageField.nativeElement;
      let sendButton = this.sendButton.nativeElement;

      nameField.disabled = true;
      emailField.disabled = true;
      messageField.disabled = true;
      sendButton.disabled = true;



      let fd = new FormData();
      fd.append('name', nameField.value);
      fd.append('email', emailField.value);
      fd.append('message', messageField.value);
      // senden
      const response = await fetch('https://fabian-duerr.developerakademie.net/send_mail_portfolio/send_mail.php',
      {
        method: 'POST',
        body: fd
      }
      )


      if (response.ok) {
        this.showDialog = true;
        this.isButtonDisabled = true;
        this.cannotSend = true;
      }
      else {
        this.showDialogNotSent = true;
      }
    }


    closeDialogNotSent() {
      this.showDialogNotSent = false;
  
    }

  closeDialog() {
    this.showDialog = false;
    this.canSend = false;
    this.inputValueName = '';
    this.inputValueEmail = '';
    this.inputValueText = '';


  }
  
}
