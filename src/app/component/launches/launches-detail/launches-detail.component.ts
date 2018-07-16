import {Component, OnInit} from '@angular/core';
import { LaunchService } from '../../../service/launch.service';
import { LaunchpadService } from '../../../service/launchpad.service';
import { ActivatedRoute } from '@angular/router';
import { Launch } from '../../../model/domain/launch.model';
import { Launchpad } from '../../../model/domain/launch-pad.model';
import { Subscription } from 'rxjs/internal/Subscription';
import {Observable} from 'rxjs/internal/Observable';
// import { EmbedVideoService } from 'ngx-embed-video';

@Component({
    selector: 'launches-detail-component',
    templateUrl: './launches-detail.component.html',
    styleUrls: [
        './launches-detail.component.css'
    ]
})

export class LaunchesDetailComponent implements OnInit {
    iframe_html: any;

    id: string;
    launch: Observable<Launch>;
    launchpad: Observable<Launchpad>;

    routeSub: Subscription;
    videoQuery = {
        query: {
            portrait: 0,
            color: '333'
        },
        attr: {
            width: '100%',
            height: 480
        }
    };

    constructor(private launchService: LaunchService,
                private launchpadService: LaunchpadService,
                // private embedService: EmbedVideoService,
                private route: ActivatedRoute) {
        this.launch = this.launchService.getById();
        this.launchpad = this.launchpadService.getById();
        this.routeSub = this.route.params.subscribe(params => {
            this.id = params['id'];
        });
    }

    ngOnInit() {
      setTimeout(() => {
        this.launchService.refreshById( this.id );
      });
    }

    // private getLaunch(): void {
    //     if (this.launchSub) { this.launchSub.unsubscribe(); }
    //     this.launchSub = this.launchService.getById(this.id)
    //         .subscribe(
    //           ( launch: Launch ) => {
    //                 this.launch = launch;
    //                 // this.iframe_html = this.embedService.embed(this.launch.links.video_link, this.videoQuery);
    //                 this.getLaunchpad(launch.launchSite.id);
    //             },
    //             err => { console.log(err); }
    //         );
    // }

    // private getLaunchpad(id: string): void {
    //     if (this.launchpadSub) { this.launchpadSub.unsubscribe(); }
    //     this.launchpadSub = this.launchpadService.getById(id)
    //         .subscribe(
    //             res => {
    //                 this.launchpad = res;
    //             },
    //             err => { console.log(err); }
    //         );
    // }
}
