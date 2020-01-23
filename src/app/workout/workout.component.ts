import { Component, OnInit } from '@angular/core';
import { Exercise } from '../exercise';
import { WorkoutService } from '../services/workout.service';
import {ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {

  constructor(
    private workoutService: WorkoutService,
    private route: ActivatedRoute,
    ) {}

  exercises: Exercise[];

  //exercises of choosen Workout
  currentExercises: Exercise[];
  //choosen exercise
  currentExercise: Exercise;

  currentWorkout: string;
  header: string;

  
  //route value passed by Router from DashboardComponent
  setCurrentWorkout(): void {
    this.currentWorkout = this.route.snapshot.paramMap.get('name');
  }
  
  getExercises(): void {
    this.workoutService.getExercises()
      .subscribe(exercises => this.exercises = exercises);
  }

  setExercises(): void { 
    this.currentExercises = this.exercises.filter((exercise) => {
      if (exercise.workout == this.currentWorkout) { 
        return exercise;
      }
    });
  }

  onSelect(exercise: Exercise):void {
    this.currentExercise = exercise;
  }

  ngOnInit() {
    this.getExercises();
    this.setCurrentWorkout();
    this.setExercises();
    this.header = this.currentWorkout;
  }
}
