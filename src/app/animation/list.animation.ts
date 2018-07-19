import {animate, query, stagger, style, transition, trigger} from '@angular/animations';

export const listAnimation = trigger('listAnimation', [
  transition('* => *', [
    query(':leave', [
      stagger(100, [
        animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(150px)', opacity: 0}))
      ])
    ], { optional: true}),
    query(':enter', [
      style({ opacity: 0 }),
      stagger(100, [
        style({ transform: 'translateY(150px)' }),
        animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(0px)', opacity: 1}))
      ])
    ], { optional: true})
  ])
]);
