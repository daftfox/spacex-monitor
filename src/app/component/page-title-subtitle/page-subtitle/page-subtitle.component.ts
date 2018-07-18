import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'page-subtitle',
  templateUrl: './page-subtitle.component.html',
  styleUrls: ['./page-subtitle.component.scss']
})

export class PageSubtitleComponent implements OnInit {
  subtitle: Observable<string>;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.subtitle = this.activatedRoute.data.pipe(
      map( data => data.pageSubtitle )
    );

  }

  ngOnInit() {
  }

}
