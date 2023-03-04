import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './tabs/tabs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HeroComponent } from './hero/hero.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { HeroPageComponent } from './hero-page/hero-page.component';
import { PopoverComponent } from './popover/popover.component';
import { MobilePopOverComponent } from './mobile-pop-over/mobile-pop-over.component';
import { ScriptService } from "./services/script.service";
import { ScheduleAppointmentComponent } from './schedule-appointment/schedule-appointment.component';
import { FoodPageComponent } from './food-page/food-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    // HeroComponent,
    HeroPageComponent,
    ContactMeComponent,
    HeroPageComponent,
    PopoverComponent,
    MobilePopOverComponent,
    ScheduleAppointmentComponent,
    FoodPageComponent,
  ],
  imports: [
    MatTabsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatIconModule
  ],
  providers: [ScriptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
