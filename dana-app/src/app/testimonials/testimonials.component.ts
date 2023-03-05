import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged } from 'rxjs';
// const data: any = require('src/assets/testimonials.testimonials.json')
import data from 'src/assets/json/testimonials.json';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  align: string = 'center';
  textmode: string = 'large';
  Breakpoints = Breakpoints;
  currentBreakpoint: string = '';
  selectedTestimonial: any = { name: "Jennifer F", image: "assets/JFbefore.jpg" };
  images: any[] = data.testimonials.map((item: any, idx: number) => {
    return { path: item.image, testimonial: item, index: idx }
  });

  readonly breakpoint$ = this.breakpointObserver
    .observe([Breakpoints.Large, Breakpoints.Medium, Breakpoints.Small, Breakpoints.HandsetPortrait, Breakpoints.HandsetLandscape])
    .pipe(
      distinctUntilChanged()
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.selectedTestimonial = this.images[0];
    console.log(this.selectedTestimonial);
    this.breakpoint$.subscribe(() =>
      this.breakpointChanged()
    );
  }

  handleClick(e: any) {
    if (e.target.className.includes('next') && !e.target.className.includes('disabled')) {
      this.selectedTestimonial = this.images[this.selectedTestimonial.index + 1]
    }

    if (!e.target.className.includes('next') && !e.target.className.includes('disabled')) {
      this.selectedTestimonial = this.images[this.selectedTestimonial.index - 1]
    }

  }

  isTextSmall(textMode: string) {
    return textMode == 'small'
  }

  private breakpointChanged() {
    if (this.breakpointObserver.isMatched(Breakpoints.Large)) {
      this.currentBreakpoint = Breakpoints.Large;
      this.textmode = "large";
    } else if (this.breakpointObserver.isMatched(Breakpoints.Medium)) {
      this.currentBreakpoint = Breakpoints.Medium;
      this.textmode = "large";
    } else if (this.breakpointObserver.isMatched(Breakpoints.HandsetLandscape)) {
      this.currentBreakpoint = Breakpoints.HandsetLandscape;
      this.textmode = "large";
    }
    else if (this.breakpointObserver.isMatched(Breakpoints.HandsetPortrait)) {
      this.align = 'iphone-portrait';
      this.textmode = "small";
      this.currentBreakpoint = Breakpoints.HandsetPortrait;
    }
  }
}
