import { MatIconModule } from '@angular/material/icon';

import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { distinctUntilChanged, tap } from 'rxjs/operators';

interface Hover {
  home: boolean;
  book: boolean;
  contact: boolean;
}

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class NavBarComponent {

  align: string = 'center';
  Breakpoints = Breakpoints;
  currentBreakpoint: string = '';
  hover = { home: false, contact: false, book: false };
  showBurger = false;
  isActive = false;
  closeButton = false;

  readonly breakpoint$ = this.breakpointObserver
    .observe([Breakpoints.Large, Breakpoints.Medium, Breakpoints.Small, Breakpoints.HandsetPortrait, Breakpoints.HandsetLandscape])
    .pipe(
      distinctUntilChanged()
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

  toggle() {
    this.isActive = !this.isActive;
  }

  ngOnInit(): void {
    this.breakpoint$.subscribe(() =>
      this.breakpointChanged()
    );
  }


  private breakpointChanged() {
    if (this.breakpointObserver.isMatched(Breakpoints.Large)) {
      this.currentBreakpoint = Breakpoints.Large;
    } else if (this.breakpointObserver.isMatched(Breakpoints.Medium)) {
      this.currentBreakpoint = Breakpoints.Medium;
    } else if (this.breakpointObserver.isMatched(Breakpoints.HandsetLandscape)) {
      this.currentBreakpoint = Breakpoints.HandsetLandscape;
    }
    else if (this.breakpointObserver.isMatched(Breakpoints.HandsetPortrait)) {
      this.align = 'iphone-portrait';
      this.currentBreakpoint = Breakpoints.HandsetPortrait;
    }
  }

  over(e: Event, type: string) {
    this.hover[type as keyof Hover] = true;
  }

  out(event: Event) {
    console.log(event);
  }


  renderTabs() {
    if (!this.breakpointObserver.isMatched(Breakpoints.HandsetPortrait) && !this.breakpointObserver.isMatched(Breakpoints.HandsetLandscape)) {
      return true;
    } else {
      return false;
    }
  }
}

