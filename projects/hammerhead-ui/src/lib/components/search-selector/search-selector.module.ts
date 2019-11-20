import { NgModule } from '@angular/core';
import { HammerheadUiModule } from '../../hammerhead-ui.module';
import { SearchSelectorComponent } from './search-selector.component';

@NgModule({
    declarations: [SearchSelectorComponent],
    imports: [HammerheadUiModule],
    exports: [SearchSelectorComponent]
})
export class SearchSelectorModule {}
