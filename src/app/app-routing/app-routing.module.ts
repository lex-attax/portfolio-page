import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PortfolioComponent } from '../portfolio/portfolio.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
