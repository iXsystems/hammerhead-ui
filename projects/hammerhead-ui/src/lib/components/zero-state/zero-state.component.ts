import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ButtonPosition } from '../../interfaces';

@Component({
    selector: 'hh-zero-state',
    templateUrl: './zero-state.component.html',
    styleUrls: ['./zero-state.component.scss']
})
export class ZeroStateComponent implements OnInit {
    @Input() public message = 'No data available';
    @Input() public hasAction = false;
    @Input() public actionText = 'Configure';
    @Input() public actionPosition: ButtonPosition = 'below';

    @Output() public doAction = new EventEmitter<void>();

    public flexLayout: 'row' | 'column' = 'column';

    public ngOnInit(): void {
        this.flexLayout = this.actionPosition === 'above' || this.actionPosition === 'below' ? 'column' : 'row';
    }
}
