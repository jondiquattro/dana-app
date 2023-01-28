import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.css']
})
export class PopoverComponent {
  @Input()
  isActive = false;

  // toggle() {
  //   console.log('button pressed');
  //   this.isActive = !this.isActive;
  // }

}
