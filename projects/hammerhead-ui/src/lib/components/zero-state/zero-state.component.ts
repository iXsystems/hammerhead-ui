import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonPosition } from '../../interfaces';

@Component({
    selector: 'hh-zero-state',
    templateUrl: './zero-state.component.html',
    styleUrls: ['./zero-state.component.scss']
})
export class ZeroStateComponent implements OnInit {
    public static readonly DEFAULT_MESSAGE = 'No data available';
    public static readonly DEFAULT_ACTION_TEXT = 'Configure';
    public static readonly DEFAULT_ACTION_POSITION = 'below';

    @Input() public message = ZeroStateComponent.DEFAULT_MESSAGE;
    @Input() public hasAction = false;
    @Input() public actionText = ZeroStateComponent.DEFAULT_ACTION_TEXT;
    @Input() public actionPosition: ButtonPosition = ZeroStateComponent.DEFAULT_ACTION_POSITION;

    @Output() public doAction = new EventEmitter<void>();

    public flexLayout: 'row' | 'column' = 'column';

    public ngOnInit(): void {
        this.flexLayout = this.actionPosition === 'above' || this.actionPosition === 'below' ? 'column' : 'row';
    }
}
