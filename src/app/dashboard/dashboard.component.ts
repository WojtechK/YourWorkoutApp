import { Component, OnInit } from '@angular/core';
import { WORKOUTS }  from '../mock-workouts';
import { Workout } from '../workout';
import { Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private router: Router
    ) {}

  readonly header: string = 'workouts';
  readonly description: string = 'Choose exercises plan prepared especially for you';
  workouts: Workout[];
  innerWidth: any;

  currentWorkout: Workout;

  setCurrentWorkout(workout): void {
    this.currentWorkout = workout;
  }

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
