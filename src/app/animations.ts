import {
    transition,
    trigger,
    query,
    style,
    animate,
    group,
    animateChild
 } from '@angular/animations';

 export const slideInAnimation =
   trigger('routeAnimations', [
     transition('IntroPage <=> DashboardPage', [
       style({
         position: 'relative'
       }),
       query(':enter, :leave', [
         style({
           position: 'absolute',
           top: 0,
           left: 0,
           width: '100%',
           opacity: 1,
           transform: 'translateY(100%)',
         }),
       ]),
       query(':enter', [
         animate('800ms ease-out',
           style({
             position: 'absolute',
             top: 0,
             left: 0,
             transform: 'translateY(0)'
           }))
       ])
     ])
   ])

export const slideInAnimation2 =
  trigger('routeAnimations', [
    transition('IntroPage <=> DashboardPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
         width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('600ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('600ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),

    transition('* <=> DashboardPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('600ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('600ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);