import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { DataTableComponent } from './components/data-table/data-table.component';
import { ZeroStateComponent } from './components/zero-state/zero-state.component';

const IMPORTS = [CommonModule, FlexLayoutModule, MatButtonModule, MatCardModule, CdkTableModule];

@NgModule({
    declarations: [ZeroStateComponent, DataTableComponent],
    imports: IMPORTS,
    exports: [ZeroStateComponent, DataTableComponent]
})
export class HammerheadUiModule {}
