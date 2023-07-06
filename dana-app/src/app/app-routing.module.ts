import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { ScheduleAppointmentComponent } from './schedule-appointment/schedule-appointment.component';
import { HeroPageComponent } from './hero-page/hero-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { HealthAssessmentComponent } from './health-assessment/health-assessment.component';
import { RestoreComponent } from './restore/restore.component';

const routes: Routes = [{ path: 'home', component: HeroPageComponent },
{ path: 'schedule-appointment', component: RestoreComponent },
// { path: 'gods-good-food', component: FoodPageComponent },
{ path: 'health-assessment', component: HealthAssessmentComponent },
{ path: 'testimonials', component: TestimonialsComponent },
{ path: '**', component: HeroPageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    MatIconModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
