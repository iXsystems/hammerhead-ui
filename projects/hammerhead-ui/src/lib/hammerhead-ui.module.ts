import { OverlayModule } from '@angular/cdk/overlay';
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressBarModule,
    MatTooltipModule
} from '@angular/material';
import { MetadataDirective } from './directives/metadata.directive';

const SHARED_DEPENDENCIES = [
    CdkTableModule,
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressBarModule,
    MatTooltipModule,
    OverlayModule,
    ReactiveFormsModule
];

const DECLARATIONS = [MetadataDirective];

@NgModule({
    declarations: DECLARATIONS,
    imports: SHARED_DEPENDENCIES,
    exports: [...SHARED_DEPENDENCIES, ...DECLARATIONS]
})
export class HammerheadUiModule {}
