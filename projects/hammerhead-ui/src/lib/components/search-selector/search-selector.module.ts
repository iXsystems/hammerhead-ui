import { NgModule } from '@angular/core';
import { HammerheadUiModule } from '../../hammerhead-ui.module';
import { SharedModule } from '../../shared.module';
import { SearchSelectorComponent } from './search-selector.component';

@NgModule({
    declarations: [SearchSelectorComponent],
    imports: [HammerheadUiModule, SharedModule],
    exports: [SearchSelectorComponent]
})
export class SearchSelectorModule {}
