import { TemplatePortal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { HeaderPortalService } from '../../services';

@Component({
    selector: 'lazy-comp',
    templateUrl: './lazy.component.html',
    styles: [
        `
            .header {
                font-size: 2rem;
                text-decoration: underline;
                color: #4a4a4a;
                border: 2px dashed #4a4a4a;
                padding: 1rem;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LazyComponent implements OnInit {
    @ViewChild('header')
    portal: TemplateRef<any>;

    pricesArray = [] as number[];

    constructor(private portalService: HeaderPortalService) {
        for (let i = 0; i < 50; i++) {
            this.pricesArray.push(i);
        }
    }

    ngOnInit() {
        this.portalService.setPortal(new TemplatePortal(this.portal, undefined, {}));
    }
}
