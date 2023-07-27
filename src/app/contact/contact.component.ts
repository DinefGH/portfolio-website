import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

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
  userInputName: string = '';
  userInputEmail: string = '';
  userInputMessage: string = '';
  canSend: boolean = true;
  cannotSend: boolean = false;
  isButtonDisabled: boolean = false;

  emailFormControl = new FormControl('', [
    Validators.required, 
    Validators.email
  ]);
  constructor () {}

  ngOnInit(): void {
  }
    async sendMail(event: SubmitEvent) {
      event.preventDefault();
      this.showDialog = true;
      this.isButtonDisabled = true;
      this.cannotSend = true;
      
      

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
     await fetch('https://fabian-duerr.developerakademie.net/send_mail_portfolio/send_mail.php',
      {
        method: 'POST',
        body: fd
      }
      )

  }

  closeDialog() {
    this.showDialog = false;
    this.canSend = false;

  }
  
}
