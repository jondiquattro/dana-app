import { Component, OnInit, Renderer2 } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { distinctUntilChanged, tap } from 'rxjs/operators';
import { ScriptService } from "./services/script.service";

// const SCRIPT_PATH = './assets/js/calendly.js';
// declare let gapi: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dana-app';


  Breakpoints = Breakpoints;
  currentBreakpoint: string = '';

  readonly breakpoint$ = this.breakpointObserver
    .observe([Breakpoints.Large, Breakpoints.Medium, Breakpoints.Small, Breakpoints.HandsetPortrait, Breakpoints.HandsetLandscape])
    .pipe(
      distinctUntilChanged()
    );
  init: any;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpoint$.subscribe(() =>
      this.breakpointChanged()
    );

    // let ss = new ScriptService(document);
    // ss.loadJsScript(this.renderer, SCRIPT_PATH);
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
      this.currentBreakpoint = Breakpoints.HandsetPortrait;
    }


    // else if (this.breakpointObserver.isMatched('(min-width: 500px)')) {
    //   this.currentBreakpoint = '(min-width: 500px)';
    // }
  }
}
