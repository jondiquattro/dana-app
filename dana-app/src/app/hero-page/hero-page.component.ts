import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged } from 'rxjs';
import data from 'src/assets/json/testimonials.json';


@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.css']
})
export class HeroPageComponent implements OnInit {

  align: string = 'center';
  textmode: string = 'large';
  Breakpoints = Breakpoints;
  currentBreakpoint: string = '';
  showBio = false;
  showTestamonial: boolean = false;
  dana: any = data.testimonials[1];
  jennifer: any = data.testimonials[0];

  readonly breakpoint$ = this.breakpointObserver
    .observe([Breakpoints.Large, Breakpoints.Medium, Breakpoints.Small, Breakpoints.HandsetPortrait, Breakpoints.HandsetLandscape])
    .pipe(
      distinctUntilChanged()
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpoint$.subscribe(() =>
      this.breakpointChanged()
    );
  }

  isTextSmall(textMode: string) {
    return textMode == 'small'
  }

  displayBio() {
    this.showBio = !this.showBio;
  }

  displayTestimonial() {
    this.showTestamonial = !this.showTestamonial;
  }

  routeClick(url: string) {
    window.open(url, '_blank')
  }

  renderTabs() {
    if (!this.breakpointObserver.isMatched(Breakpoints.HandsetPortrait) && !this.breakpointObserver.isMatched(Breakpoints.HandsetLandscape)) {
      return true;
    } else {
      return false;
    }
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
