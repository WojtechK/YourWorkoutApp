import { Component, OnInit, OnDestroy } from '@angular/core';
import { Exercise } from '../exercise';
import { WorkoutService } from '../services/workout.service';
import {ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit, OnDestroy {

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
  modalActive: boolean = false;

  //stopwatch
  interval = 500;  
  seconds = 30;  
  time = this.seconds * this.interval * 60;

  //route value passed by Router from DashboardComponent
  setCurrentWorkout(): void {
    this.currentWorkout = this.route.snapshot.paramMap.get('name');
  }
  
  getExercises(): void {
    this.workoutService.getExercises()
      .subscribe(exercises => {
        this.exercises = exercises;
        this.setExercises();
      });
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

  showModal(): void {
    this.modalActive = true;
  }

  closeModal(): void {
    this.modalActive = false;
  }

  addExercise(title: string, description: string, difficulty: number, workout: string): void {
    title = title.trim();
    description = description.trim();
    if (!title || !description || !difficulty) { 
      return; 
    }
    this.workoutService.addExercise({ title, description, difficulty, workout } as Exercise)
      .subscribe(exercise => {
        this.exercises.push(exercise);
      });
  }
  counter: number = 0;
  timerRef;
  running: boolean = false;
  startText = 'Start';

  startTimer() {
    this.running = !this.running;
    if (this.running) {
      this.startText = 'Stop';
      const startTime = new Date().getSeconds() - (this.counter || 1);
      this.timerRef = setInterval(() => {
        this.counter = new Date().getSeconds() - startTime;
      });
    } else {
      this.startText = 'Resume';
      clearInterval(this.timerRef);
    }
  }

  clearTimer() {
    this.running = false;
    this.startText = 'Start';
    this.counter = undefined;
    clearInterval(this.timerRef);
  }

  ngOnDestroy() {
    clearInterval(this.timerRef);
  }

  ngOnInit() {
    this.getExercises();
    this.setCurrentWorkout();
    this.header = this.currentWorkout;
  }
}
