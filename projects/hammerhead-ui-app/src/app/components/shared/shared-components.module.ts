import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule
} from '@angular/material';
import { HammerheadUiModule } from 'hammerhead-ui';
import { DemoExampleComponent } from './demo-example/demo-example.component';
import { DemoComponent } from './demo/demo.component';

const COMPONENTS = [DemoComponent, DemoExampleComponent];

const MATERIAL_MODULES = [
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule
];

@NgModule({
    declarations: COMPONENTS,
    imports: [CommonModule, FlexLayoutModule, HammerheadUiModule, ...MATERIAL_MODULES],
    exports: [FlexLayoutModule, HammerheadUiModule, ...COMPONENTS, ...MATERIAL_MODULES]
})
export class SharedComponentsModule {}
