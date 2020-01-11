import { Injectable } from '@angular/core';
import { EXERCISES } from '../mock-exercises';
import { Exercise } from '../exercise';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  getExercises(): Observable<Exercise[]> {
    return of(EXERCISES);
  }

  constructor() { }
}
