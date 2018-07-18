import { Component, OnInit } from '@angular/core';
import {Route, Router, Routes} from '@angular/router';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  routes: any[];

  constructor(private router: Router) {
    this.routes = router.config.filter( (route: Route) => {
      return !!route.data && !!route.data.navIconClass ? route : null;
    });
  }

  ngOnInit() {
  }

}
