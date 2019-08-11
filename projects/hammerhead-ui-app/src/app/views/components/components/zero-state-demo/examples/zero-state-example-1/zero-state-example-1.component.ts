import { Component } from '@angular/core';

@Component({
    selector: 'app-zero-state-example-1',
    template: `
        <hh-zero-state message="No data available" [style.max-width.px]="320"></hh-zero-state>
    `
})
export class ZeroStateExample1Component {}
