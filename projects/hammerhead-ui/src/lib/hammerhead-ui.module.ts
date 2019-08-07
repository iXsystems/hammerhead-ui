import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { ZeroStateComponent } from './components/zero-state/zero-state.component';

const COMPONENTS = [ZeroStateComponent];
const DIRECTIVES = [];
const SERVICES = [];
const IMPORTS = [CommonModule, FlexLayoutModule, MatButtonModule, MatCardModule];

@NgModule({
    declarations: [...COMPONENTS],
    imports: IMPORTS,
    exports: [...COMPONENTS]
})
export class HammerheadUiModule {}
