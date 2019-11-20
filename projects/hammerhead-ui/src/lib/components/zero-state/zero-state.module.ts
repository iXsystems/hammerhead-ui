import { NgModule } from '@angular/core';
import { HammerheadUiModule } from '../../hammerhead-ui.module';
import { ZeroStateComponent } from './zero-state.component';
import { HHDirectivesModule } from '../../directives/directives.module';

@NgModule({
    declarations: [ZeroStateComponent],
    imports: [HammerheadUiModule, HHDirectivesModule],
    exports: [ZeroStateComponent]
})
export class ZeroStateModule {}
