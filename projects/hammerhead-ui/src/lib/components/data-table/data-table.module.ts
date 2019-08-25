import { NgModule } from '@angular/core';
import { HammerheadUiModule } from '../../hammerhead-ui.module';
import { ZeroStateModule } from '../zero-state/zero-state.module';
import { DataTableComponent } from './data-table.component';

@NgModule({
    declarations: [DataTableComponent],
    imports: [HammerheadUiModule, ZeroStateModule],
    exports: [DataTableComponent]
})
export class DataTableModule {}
