import { Injectable } from '@angular/core';
import { EXERCISES } from '../mock-exercises';
import { Exercise } from '../exercise';
import { Observable, of } from 'rxjs';
import { WORKOUTS }  from '../mock-workouts';
import { Workout } from '../workout';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  getExercises(): Observable<Exercise[]> {
    return of(EXERCISES);
  }

  // getWorkout(name: string): Observable<Workout> {
  //   return of(WORKOUTS.find(workout => workout.name === name));
  // }

  constructor() { }
}
