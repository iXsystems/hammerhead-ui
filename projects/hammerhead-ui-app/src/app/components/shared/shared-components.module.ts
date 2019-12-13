import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
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
import {
    DataTableModule,
    HHDirectivesModule,
    ProximityDialogService,
    SearchSelectorModule,
    TimelineModule,
    ZeroStateModule
} from 'hammerhead-ui';
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
    MatToolbarModule,
    OverlayModule
];

@NgModule({
    declarations: COMPONENTS,
    imports: [
        CommonModule,
        DataTableModule,
        FlexLayoutModule,
        HHDirectivesModule,
        MarkdownModule.forChild(),
        SearchSelectorModule,
        TimelineModule,
        ZeroStateModule,
        ...MATERIAL_MODULES
    ],
    exports: [
        CommonModule,
        DataTableModule,
        FlexLayoutModule,
        HHDirectivesModule,
        SearchSelectorModule,
        TimelineModule,
        ZeroStateModule,
        ...COMPONENTS,
        ...MATERIAL_MODULES
    ]
})
export class SharedComponentsModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedComponentsModule,
            providers: [ProximityDialogService]
        };
    }
}
