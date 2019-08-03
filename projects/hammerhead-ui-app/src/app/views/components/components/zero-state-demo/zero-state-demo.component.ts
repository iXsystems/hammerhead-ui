import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ButtonPosition } from 'hammerhead-ui';

@Component({
    selector: 'app-zero-state-demo',
    templateUrl: './zero-state-demo.component.html',
    styleUrls: ['./zero-state-demo.component.scss']
})
export class ZeroStateDemoComponent {
    constructor(private snackBar: MatSnackBar) {}

    public onAction(buttonPosition: ButtonPosition): void {
        this.snackBar.open(
            `You clicked the action button of the ${buttonPosition.toUpperCase()} zero-state component.`,
            undefined,
            { duration: 2000 }
        );
    }
}
