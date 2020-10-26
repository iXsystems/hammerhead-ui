import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { MatSliderChange } from '@angular/material/slider';
import { TimelineDate } from '../../interfaces';

@Component({
    selector: 'hh-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
    @Input() public readonly dates: TimelineDate[] = [
        { date: new Date(), displayFormatter: date => date.toDateString() }
    ];

    @Input() public initialDate: TimelineDate = null;

    @Output() public selection = new EventEmitter<TimelineDate>();

    public selectedDateIndex: number;

    public get date(): TimelineDate {
        return this.dates[this.selectedDateIndex];
    }

    public ngOnInit(): void {
        this.selectedDateIndex = this.initialDate
            ? this.dates.findIndex(date => date.date.toUTCString() === this.initialDate.date.toUTCString())
            : this.dates.length - 1;
    }

    public onChange(change: MatSliderChange): void {
        this.selectedDateIndex = change.value;
        this.selection.emit(this.dates[this.selectedDateIndex]);
    }

    public onInput(change: MatSelectChange): void {
        this.selectedDateIndex = change.value;
    }
}
