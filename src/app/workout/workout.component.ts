import { Component, OnInit } from '@angular/core';
import { Exercise } from '../exercise';
import { WorkoutService } from '../services/workout.service';


@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {

  constructor(private workoutService: WorkoutService) {}

  readonly header: string = 'abs';
  exercises: Exercise[];
  currentExercise: Exercise;

  getExercises(): void {
    this.workoutService.getExercises().subscribe(exercises => this.exercises = exercises);
  }

  onSelect(exercise: Exercise):void {
    this.currentExercise = exercise;
  }
  
  ngOnInit() {
    this.getExercises();
  }
}
