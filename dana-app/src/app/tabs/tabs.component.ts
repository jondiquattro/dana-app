import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class NavBarComponent {

  align: string = 'center';
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


  private breakpointChanged() {
    if (this.breakpointObserver.isMatched(Breakpoints.Large)) {
      console.log('large')
      this.currentBreakpoint = Breakpoints.Large;
    } else if (this.breakpointObserver.isMatched(Breakpoints.Medium)) {
      console.log('medium')
      this.currentBreakpoint = Breakpoints.Medium;
    } else if (this.breakpointObserver.isMatched(Breakpoints.HandsetLandscape)) {
      console.log('landscape')
      this.currentBreakpoint = Breakpoints.HandsetLandscape;
    }
    else if (this.breakpointObserver.isMatched(Breakpoints.HandsetPortrait)) {
      console.log('portrait')
      this.align = 'iphone-portrait';
      this.currentBreakpoint = Breakpoints.HandsetPortrait;
    }
  }

}
