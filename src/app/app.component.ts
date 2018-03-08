import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = '';
  subTitle = '';
  coverImage = '';


  constructor(private router: Router) {
    
  }

  ngOnInit() {
    this.router.events
        .filter((event: any) => event instanceof NavigationEnd)
        .subscribe(() => {
            var root = this.router.routerState.snapshot.root;
            while (root) {
                if (root.children && root.children.length) {
                    root = root.children[0];
                } else if (root.data && 
                           root.data["pageTitle"] && 
                           root.data["cover_image"] &&
                           root.data["subTitle"]) {
                    this.pageTitle = root.data["pageTitle"];
                    this.subTitle = root.data["subTitle"];
                    this.coverImage = root.data["cover_image"];
                    return;
                } else {
                    return;
                }
            }
        });
}
}
