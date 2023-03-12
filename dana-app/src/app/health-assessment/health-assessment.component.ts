import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { distinctUntilChanged } from 'rxjs';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-health-assessment',
  templateUrl: './health-assessment.component.html',
  styleUrls: ['./health-assessment.component.css']
})
export class HealthAssessmentComponent implements OnInit {

  align: string = 'center';
  textmode: string = 'large';
  Breakpoints = Breakpoints;
  currentBreakpoint: string = '';

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

  routeClick(url: string) {
    window.open(url, '_blank')
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