import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZeroStateComponent } from './components/zero-state/zero-state.component';

const COMPONENTS = [ZeroStateComponent];
const DIRECTIVES = [];
const SERVICES = [];
const IMPORTS = [BrowserAnimationsModule, FlexLayoutModule, MatButtonModule, MatCardModule];

@NgModule({
    declarations: [...COMPONENTS],
    imports: IMPORTS,
    exports: [...COMPONENTS]
})
export class HammerheadUiModule {}
