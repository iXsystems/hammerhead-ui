import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
    public static readonly URL_REPO_ROOT = 'https://raw.githubusercontent.com/iXsystems/hammerhead-ui/master/';

    @Input() public title: string;
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

    public onTabSelection(): void {
        window.dispatchEvent(new Event('resize'));
    }
}
