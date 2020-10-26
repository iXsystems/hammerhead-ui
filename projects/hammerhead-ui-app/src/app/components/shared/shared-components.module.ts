import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
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
    static forRoot(): ModuleWithProviders<SharedComponentsModule> {
        return {
            ngModule: SharedComponentsModule,
            providers: [ProximityDialogService]
        };
    }
}
