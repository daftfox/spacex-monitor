import { Component } from '@angular/core';
import { LaunchService } from '../../../services/launch.service';
import { LaunchpadService } from '../../../services/launchpad.service';
import { CapsuleService } from '../../../services/capsule.service';
import { Observer } from 'rxjs/Observer';
import { URLSearchParams } from '@angular/http';

@Component({
    selector: 'capsules-component',
    templateUrl: './capsules.component.html',
    styleUrls: [
        './capsules.component.css'
    ]
})

export class CapsulesComponent {
    capsules: Array<any>;
    
    capsuleSub: any;

    constructor(private capsuleService: CapsuleService) {
        this.getCapsules();
    }

    private getCapsules(): void {
        if (this.capsuleSub) this.capsuleSub.unsubscribe();
        this.capsuleService.getAll()
            .subscribe(
                res => this.capsules = res,
                err => { console.log(err); }
            );
    }
}