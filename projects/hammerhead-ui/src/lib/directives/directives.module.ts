import { NgModule } from '@angular/core';
import { SearchSelectorModule } from '../components/search-selector/search-selector.module';
import { HammerheadUiModule } from '../hammerhead-ui.module';
import { SharedModule } from '../shared.module';
import { SearchSelectorDialogComponent, SearchSelectorDirective } from './search-selector.directive';

const DIRECTIVES = [SearchSelectorDirective];
const DIALOGS = [SearchSelectorDialogComponent];

@NgModule({
    declarations: [...DIALOGS, ...DIRECTIVES],
    imports: [HammerheadUiModule, SearchSelectorModule, SharedModule],
    exports: [...DIRECTIVES],
    entryComponents: DIALOGS
})
export class HHDirectivesModule {}
