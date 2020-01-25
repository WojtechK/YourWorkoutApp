import { Injectable } from '@angular/core';
import { Exercise } from '../exercise';
import { Observable, of } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor(
    private http: HttpClient
    ) { }

    private exercisesUrl = 'api/EXERCISES';

  getExercises(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(this.exercisesUrl)
    .pipe(
      tap(_ => console.log('fetched exercises')),
      catchError(this.handleError<Exercise[]>('getExercises', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}
