import {animate, query, stagger, style, transition, trigger} from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition('* => *', [
    query(':leave', [
      stagger(100, [
        animate(
          '200ms ease-out',
          style({ opacity: 0 })
        )
      ])
    ], { optional: true}),
    query(':enter', [
      style({ opacity: 0 }),
      stagger(100, [
        animate(
          '550ms ease-out',
          style({ opacity: 1 })
        )
      ])
    ], { optional: true})
  ])
]);

