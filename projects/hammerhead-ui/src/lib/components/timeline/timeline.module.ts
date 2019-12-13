import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HammerheadUiModule } from '../../hammerhead-ui.module';
import { TimelineComponent } from './timeline.component';

@NgModule({
    declarations: [TimelineComponent],
    imports: [CommonModule, HammerheadUiModule],
    exports: [TimelineComponent]
})
export class TimelineModule {}
