import { Component } from '@angular/core';
import { CapsuleService } from '../../../service/capsule.service';
import { Capsule } from '../../../model/domain/capsule.model';

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
        this.capsuleService.get()
            .subscribe(
              ( capsules: Capsule[] ) => this.capsules = capsules,
                err => { console.log(err); }
            );
    }
}
