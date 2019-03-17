import { ChangeDetectionStrategy, Component, ElementRef, OnInit } from '@angular/core';
import { combineLatest, interval, Observable } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { PriceService, VisibilityService } from '../services';

@Component({
    selector: 'lazy-price',
    template: `
        <h1>Price <ng-content></ng-content>: {{ price$ | async }}</h1>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriceComponent implements OnInit {
    price$: Observable<number>;

    constructor(private priceService: PriceService, private visibilityService: VisibilityService, private host: ElementRef) {}

    ngOnInit() {
        const elementInSight$ = this.visibilityService.elementInSight(this.host);

        this.price$ = combineLatest(interval(2000), elementInSight$, (_counter, visible) => visible).pipe(
            // tap(visible => console.log('visible', visible)),
            filter(visible => visible),
            // tap(() => console.log('current time', new Date())),
            switchMap(() => this.priceService.getPrice()),
        );
    }
}
