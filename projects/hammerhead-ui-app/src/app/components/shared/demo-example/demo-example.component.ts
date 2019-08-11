import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-demo-example',
    templateUrl: './demo-example.component.html',
    styleUrls: ['./demo-example.component.scss']
})
export class DemoExampleComponent {
    private static readonly URL_REPO_ROOT = 'https://raw.githubusercontent.com/iXsystems/hammerhead-ui/master/';

    @Input() public description: string;

    private tsSource: string;
    public get tsSourceUrl(): string {
        return this.tsSource;
    }
    @Input() public set tsSourceUrl(url: string) {
        this.tsSource = DemoExampleComponent.URL_REPO_ROOT + url;
    }

    private templateSource: string;
    public get templateSourceUrl(): string {
        return this.templateSource;
    }
    @Input() public set templateSourceUrl(url: string) {
        this.templateSource = DemoExampleComponent.URL_REPO_ROOT + url;
    }
}
