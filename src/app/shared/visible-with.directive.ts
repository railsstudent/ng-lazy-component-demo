import { ChangeDetectorRef, Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { filter, take } from 'rxjs/operators';
import { VisibilityService } from '../services';

@Directive({
    selector: '[visibleWith]',
})
export class VisibleWithDirective {
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private visibilityService: VisibilityService,
        private cd: ChangeDetectorRef,
    ) {}

    @Input()
    set visibleWith(element) {
        this.visibilityService
            .elementInSight(new ElementRef(element))
            .pipe(
                filter(visible => visible),
                take(1),
            )
            .subscribe(() => {
                this.viewContainer.createEmbeddedView(this.templateRef);
                this.cd.markForCheck();
            });
    }
}
