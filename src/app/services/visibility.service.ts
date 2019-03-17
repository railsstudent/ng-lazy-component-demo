import { DOCUMENT } from '@angular/common';
import { ElementRef, Inject, Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { distinctUntilChanged, map, mergeMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class VisibilityService {
    // private pageVisible$: Observable<boolean>;

    constructor(@Inject(DOCUMENT) document: Document) {
        // this.pageVisible$ = concat(
        //   defer(() => of(document.hidden)),
        //   fromEvent(document, 'visibilitychange')
        //     .pipe(
        //       tap(v => console.log('pageVisible', v)),
        //       map(() => !document.hidden)
        //     )
        // );
    }

    elementInSight(element: ElementRef) {
        const elementVisible$: Observable<boolean> = new Observable(observer => {
            const intersectionObserver = new IntersectionObserver(entries => {
                return observer.next(entries);
            });

            intersectionObserver.observe(element.nativeElement);

            // clean up logic
            return () => intersectionObserver.disconnect();
        }).pipe(
            mergeMap((entries: IntersectionObserverEntry[]) => entries),
            map((entry: IntersectionObserverEntry) => entry.isIntersecting),
            distinctUntilChanged(),
        );

        const elementInSight$ = combineLatest(elementVisible$).pipe(
            map(([elementVisible]: [boolean]) => elementVisible),
            distinctUntilChanged(),
        );

        return elementInSight$;
    }
}
