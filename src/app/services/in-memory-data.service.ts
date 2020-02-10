import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const EXERCISES = [{
        id: 1,
        title: 'sit ups',
        workout: 'abs',
        description: 'start with lying with the back on the floor, keep hands behind the head and the knees bent, then pick up your chest to your knees',
        difficulty: 2
      },
      {
        id: 2,
        title: 'leg rises',
        workout: 'abs',
        description: 'lorem ipsum dorem la',
        difficulty: 3
      },
      {
        id: 3,
        title: 'plank',
        workout: 'abs',
        description: 'lorem ipsum dorem la',
        difficulty: 4
      },
      {
        id: 4,
        title: 'scissors',
        workout: 'abs',
        description: 'lorem ipsum dorem la',
        difficulty: 3
      },
      {
        id: 4,
        title: 'bench press',
        workout: 'chest',
        description: 'lorem ipsum dorem la',
        difficulty: 3
      },
      {
        id: 4,
        title: 'push ups',
        workout: 'chest',
        description: 'lorem ipsum dorem la',
        difficulty: 3
      },
    ]
    return {EXERCISES};
  }
}
