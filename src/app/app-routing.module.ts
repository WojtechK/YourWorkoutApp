import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [ 
  { path: '', component: IntroComponent, data: {animation: 'IntroPage'} },
  { path: 'dashboard', component: DashboardComponent, data: {animation: 'DashboardPage'} }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
