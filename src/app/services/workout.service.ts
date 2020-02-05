import { Injectable } from '@angular/core';
import { Exercise } from '../exercise';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor(
    private http: HttpClient
    ) { }

    private exercisesUrl = 'api/EXERCISES';

    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

  getExercises(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(this.exercisesUrl)
    .pipe(
      tap(_ => console.log('fetched exercises')),
      catchError(this.handleError<Exercise[]>('getExercises', []))
    );
  }

  addExercise(exercise: Exercise): Observable<Exercise> {
    return this.http.post<Exercise>(this.exercisesUrl, exercise, this.httpOptions)
    .pipe(
      tap((newExercise: Exercise) => console.log(`added exercise w/ id=${newExercise}`)),
      catchError(this.handleError<Exercise>('addExercise'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
