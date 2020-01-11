import { Component, OnInit } from '@angular/core';
import { WORKOUTS }  from '../workouts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  readonly header: string = 'workouts';
  readonly description: string = 'Choose exercises plan prepared especially for you';
  workouts: any;
  innerWidth: any;

  isWorkoutEnabled(workout): boolean {
    if(workout.enabled === true) {
      return true;
    }
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.workouts = WORKOUTS;
  }
}
