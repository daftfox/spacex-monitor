import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})

export class PageTitleComponent implements OnInit {
  title$: Observable<string>;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.title$ = this.activatedRoute.data.pipe(
      map( data => data.pageTitle )
    );

  }

  ngOnInit() {
  }

}
