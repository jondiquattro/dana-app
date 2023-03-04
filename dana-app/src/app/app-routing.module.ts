import { FoodPageComponent } from './food-page/food-page.component';
import { ScheduleAppointmentComponent } from './schedule-appointment/schedule-appointment.component';
import { HeroPageComponent } from './hero-page/hero-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [{ path: 'home', component: HeroPageComponent },
{ path: 'schedule-appointment', component: ScheduleAppointmentComponent },
{ path: 'gods-good-food', component: FoodPageComponent },
{ path: '**', component: HeroPageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    MatIconModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
