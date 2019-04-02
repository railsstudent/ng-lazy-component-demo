import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'lazy-hello',
    template: `
        <h1>Hello {{ name }}!</h1>
    `,
    styles: [
        `
            h1 {
                font-family: Lato;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelloComponent implements OnInit {
    @Input() name: string;

    ngOnInit() {
        console.log('Initializing lazy component');
    }
}
