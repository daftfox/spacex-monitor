import { Component } from '@angular/core';
import { LaunchService } from '../../../services/launch.service';
import { LaunchpadService } from '../../../services/launchpad.service';
import { ActivatedRoute } from '@angular/router';
import { Observer } from 'rxjs/Observer';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
    selector: 'launches-detail-component',
    templateUrl: './launches-detail.component.html',
    styleUrls: [
        './launches-detail.component.css'
    ]
})

export class LaunchesDetailComponent {
    iframe_html: any;

    id: string;
    launch: any;
    launchpad: any;

    launchSub: any;
    launchpadSub: any;
    routeSub: any;
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
                private embedService: EmbedVideoService,
                private route: ActivatedRoute) {
        
        this.routeSub = this.route.params.subscribe(params => {
            this.id = params['id'];
            this.getRocket();
        });
    }

    private getRocket(): void {
        if (this.launchSub) this.launchSub.unsubscribe();
        this.launchService.getById(this.id)
            .subscribe(
                res => {
                    this.launch = res[0];
                    this.iframe_html = this.embedService.embed(this.launch.links.video_link, this.videoQuery);
                    this.getLaunchpad(res[0].launch_site.site_id);
                },
                err => { console.log(err); }
            );
    }

    private getLaunchpad(id: string): void {
        if (this.launchpadSub) this.launchpadSub.unsubscribe();
        this.launchpadService.getById(id)
            .subscribe(
                res => {
                    this.launchpad = res;
                },
                err => { console.log(err); }
            );
    }
}