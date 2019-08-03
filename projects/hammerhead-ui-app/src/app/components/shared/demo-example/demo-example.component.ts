import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-demo-example',
    templateUrl: './demo-example.component.html',
    styleUrls: ['./demo-example.component.scss']
})
export class DemoExampleComponent {
  @Input() public description: string;
}
