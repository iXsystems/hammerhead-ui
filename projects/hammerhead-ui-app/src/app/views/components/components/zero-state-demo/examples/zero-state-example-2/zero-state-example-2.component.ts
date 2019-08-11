import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ButtonPosition } from 'hammerhead-ui';

@Component({
    selector: 'app-zero-state-example-2',
    templateUrl: './zero-state-example-2.component.html'
})
export class ZeroStateExample2Component {
    constructor(private snackBar: MatSnackBar) {}

    public onAction(buttonPosition: ButtonPosition): void {
        this.snackBar.open(
            `You clicked the action button of the ${buttonPosition.toUpperCase()} zero-state component.`,
            undefined,
            { duration: 2000 }
        );
    }
}
