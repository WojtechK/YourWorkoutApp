import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  readonly header: string = 'exercises';
  readonly description: string = 'Choose exercises plan prepared especially for you';
  readonly exercises: string[] = ['abs', 'back', 'chest', 'biceps', 'triceps', 'shoulders', 'quadriceps', 'harmstrings'];

  public innerWidth: any;

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }
}
