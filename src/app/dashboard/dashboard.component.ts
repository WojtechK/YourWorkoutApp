import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  readonly header: string = 'workouts';
  readonly description: string = 'Choose exercises plan prepared especially for you';
  readonly workouts: string[] = ['abs', 'back', 'chest', 'biceps', 'triceps', 'shoulders', 'quadriceps', 'harmstrings'];
  readonly enabledWorkouts: string[] = ['abs'];

  public innerWidth: any;

  isWorkoutEnabled(workout) { 
    if(this.enabledWorkouts.includes(workout)) { 
      return true;
    }
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }
}
