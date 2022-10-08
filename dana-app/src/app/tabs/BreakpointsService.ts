import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { distinctUntilChanged, tap } from 'rxjs/operators';


export class BreakpointsService {

    Breakpoints = Breakpoints;
    currentBreakpoint: string = '';

    readonly breakpoint$ = this.breakpointObserver
        .observe([Breakpoints.Large, Breakpoints.Medium, Breakpoints.Small, Breakpoints.HandsetPortrait, Breakpoints.HandsetLandscape])
        .pipe(
            distinctUntilChanged()
        );

    constructor(private breakpointObserver: BreakpointObserver) { }

    private breakpointChanged() {
        if (this.breakpointObserver.isMatched(Breakpoints.Large)) {
            console.log('large')
            return this.currentBreakpoint = Breakpoints.Large;
        } else if (this.breakpointObserver.isMatched(Breakpoints.Medium)) {
            console.log('medium')
            return this.currentBreakpoint = Breakpoints.Medium;
        } else if (this.breakpointObserver.isMatched(Breakpoints.HandsetLandscape)) {
            console.log('landscape')
            return this.currentBreakpoint = Breakpoints.HandsetLandscape;
        }
        else if (this.breakpointObserver.isMatched(Breakpoints.HandsetPortrait)) {
            console.log('portrait')
            // this.align = 'iphone-portrait';
            return this.currentBreakpoint = Breakpoints.HandsetPortrait;
        }
    }
}