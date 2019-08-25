import { NgModule } from '@angular/core';
import { HammerheadUiModule } from '../../hammerhead-ui.module';
import { ZeroStateComponent } from './zero-state.component';

@NgModule({
    declarations: [ZeroStateComponent],
    imports: [HammerheadUiModule],
    exports: [ZeroStateComponent]
})
export class ZeroStateModule {}
