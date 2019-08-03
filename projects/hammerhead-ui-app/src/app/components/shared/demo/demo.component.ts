import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
  @Input() public title: string;
  @Input() public description: string;
}
