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
    MatSnackBarModule,
    MatToolbarModule,
    MatTabsModule
} from '@angular/material';
import { HammerheadUiModule } from 'hammerhead-ui';
import { DemoExampleComponent } from './demo-example/demo-example.component';
import { DemoComponent } from './demo/demo.component';
import { MarkdownModule } from 'ngx-markdown';

const COMPONENTS = [DemoComponent, DemoExampleComponent];

const MATERIAL_MODULES = [
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule
];

@NgModule({
    declarations: COMPONENTS,
    imports: [CommonModule, FlexLayoutModule, HammerheadUiModule, MarkdownModule.forChild(), ...MATERIAL_MODULES],
    exports: [FlexLayoutModule, HammerheadUiModule, ...COMPONENTS, ...MATERIAL_MODULES]
})
export class SharedComponentsModule {}
