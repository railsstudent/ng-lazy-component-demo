import { Portal } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HeaderPortalService } from '../services';

@Component({
    selector: 'lazy-header',
    template: `
        <div *ngIf="(portal$ | async) as portal">
            <ng-container [cdkPortalOutlet]="portal"></ng-container>
        </div>
    `,
})
export class HeaderComponent implements OnInit {
    portal$: Observable<Portal<any>>;
    constructor(private portalService: HeaderPortalService) {}

    ngOnInit() {
        this.portal$ = this.portalService.portal;
    }
}
