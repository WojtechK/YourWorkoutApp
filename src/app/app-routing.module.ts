import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorkoutComponent } from './workout/workout.component';

const routes: Routes = [ 
  { path: '', component: IntroComponent, data: {animation: 'IntroPage'} },
  { path: 'dashboard', component: DashboardComponent, data: {animation: 'DashboardPage'} },
  { path: 'workout', component: WorkoutComponent, data: {animation: 'WorkoutPage'} }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
