import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HammerheadUiModule } from '../../hammerhead-ui.module';



@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    HammerheadUiModule
  ],
  exports: [
    InputComponent
  ]
})
export class InputModule { }
