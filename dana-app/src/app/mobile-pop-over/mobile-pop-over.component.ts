import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-pop-over',
  templateUrl: './mobile-pop-over.component.html',
  styleUrls: ['./mobile-pop-over.component.css']
})
export class MobilePopOverComponent {

  @Input()
  isActive = false;

}
