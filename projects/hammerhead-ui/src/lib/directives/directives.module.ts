import { NgModule } from '@angular/core';
import { SearchSelectorModule } from '../components/search-selector/search-selector.module';
import { HammerheadUiModule } from '../hammerhead-ui.module';
import {
    ContextmenuDialogComponent,
    ContextmenuDirective
} from './contextmenu.directive';
import {
    SearchSelectorDialogComponent,
    SearchSelectorDirective
} from './search-selector.directive';

const DIRECTIVES = [ContextmenuDirective, SearchSelectorDirective];
const DIALOGS = [ContextmenuDialogComponent, SearchSelectorDialogComponent];

@NgModule({
    declarations: [...DIALOGS, ...DIRECTIVES],
    imports: [HammerheadUiModule, SearchSelectorModule],
    exports: [...DIRECTIVES],
    entryComponents: DIALOGS
})
export class HHDirectivesModule {}
