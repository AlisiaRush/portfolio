import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ContactFormService } from '../service/contact-form.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public contactForm: FormGroup;

  constructor(
    private contactFormService: ContactFormService,
    private fb: FormBuilder
  ) {}

  public showDevelopment?: boolean;
  public showDesign?: boolean;
  public showBranding?: boolean;

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl(''),
      emailAddress: new FormControl('', [
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      // emailAddress: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      comments: new FormControl(''),
    });
  }

  public getDevelopmentContent() {
    this.showDevelopment = !this.showDevelopment;
  }

  public getDesignContent() {
    this.showDesign = !this.showDesign;
  }

  public getBrandingContent() {
    this.showBranding = !this.showBranding;
  }

  public onSubmit(FormData: any) {
    console.log(FormData);
    this.contactFormService.contactFormPost(FormData).subscribe(
      (response) => {
        location.href = 'https://mailthis.to/confirm';
        console.log(response);
      },
      (error) => {
        console.warn(error.responseText);
        console.log({ error });
      }
    );
  }
}
