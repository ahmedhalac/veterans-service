import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FAQs } from 'src/app/core/types';
import { faqs } from 'src/app/shared/constants';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent {
  faqs: FAQs[] = faqs;

  constructor(private router: Router) {}

  onButtonRedirect(): void {
    this.router.navigate(['/contact-us']);
  }
}
