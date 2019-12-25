import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  readonly title: string = 'your workout';
  readonly description: string = 'personal training web application';
  
  ngOnInit() {
  }
}
