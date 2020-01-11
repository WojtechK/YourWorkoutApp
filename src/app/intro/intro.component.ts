import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent  {

  readonly title: string = 'your workout';
  readonly description: string = 'personal training web application';
  readonly button: string = 'start training now';
}
