import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FAQs, Testimonial } from 'src/app/core/types';
import {
  faqs,
  swiperConfig,
  testimonialContent,
} from 'src/app/shared/constants';
import Swiper, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  @ViewChild('slider', { static: true }) items: ElementRef | undefined;
  @ViewChild('swiperRef') swiper?: Swiper;
  swiperRef: ElementRef | undefined;
  slides: Testimonial[] = testimonialContent;
  faqs: FAQs[] = faqs;
  public config: SwiperOptions = swiperConfig;

  constructor(private router: Router) {}

  onButtonRedirect(): void {
    this.router.navigate(['/contact-us']);
  }
}
