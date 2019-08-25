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
    MatTabsModule,
    MatToolbarModule
} from '@angular/material';
import { DataTableModule, ZeroStateModule } from 'hammerhead-ui';
import { MarkdownModule } from 'ngx-markdown';
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
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule
];

@NgModule({
    declarations: COMPONENTS,
    imports: [
        CommonModule,
        DataTableModule,
        FlexLayoutModule,
        MarkdownModule.forChild(),
        ...MATERIAL_MODULES,
        ZeroStateModule
    ],
    exports: [CommonModule, DataTableModule, FlexLayoutModule, ZeroStateModule, ...COMPONENTS, ...MATERIAL_MODULES]
})
export class SharedComponentsModule {}
