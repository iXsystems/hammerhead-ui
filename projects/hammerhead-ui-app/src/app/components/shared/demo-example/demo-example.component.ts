import { Component, Input } from '@angular/core';
import { DemoComponent } from '../demo/demo.component';

@Component({
    selector: 'app-demo-example',
    templateUrl: './demo-example.component.html',
    styleUrls: ['./demo-example.component.scss']
})
export class DemoExampleComponent {
    @Input() public description: string;

    private tsSource: string;
    public get tsSourceUrl(): string {
        return this.tsSource;
    }
    @Input() public set tsSourceUrl(url: string) {
        this.tsSource = DemoComponent.URL_REPO_ROOT + url;
    }

    private templateSource: string;
    public get templateSourceUrl(): string {
        return this.templateSource;
    }
    @Input() public set templateSourceUrl(url: string) {
        this.templateSource = DemoComponent.URL_REPO_ROOT + url;
    }
}
