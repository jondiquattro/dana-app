import { ContactMeComponent } from './contact-me/contact-me.component';
import { HeroPageComponent } from './hero-page/hero-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [{ path: 'home', component: HeroPageComponent },
{ path: 'contact-me', component: ContactMeComponent }, { path: '**', component: HeroPageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    MatIconModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
