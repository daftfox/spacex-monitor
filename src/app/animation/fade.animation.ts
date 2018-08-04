import {animate, query, stagger, style, transition, trigger} from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate('550ms ease-in-out', style({
      opacity: 1
    }))
  ]),
  transition(':leave', [
    style({
      opacity: 1
    }),
    animate('200ms ease-in-out', style({
      opacity: 0
    }))
  ])
]);

