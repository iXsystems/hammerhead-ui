import { NgModule } from '@angular/core';
import { MetadataDirective } from './directives/metadata.directive';

const DECLARATIONS = [MetadataDirective];

@NgModule({
    declarations: DECLARATIONS,
    exports: [...DECLARATIONS]
})
export class SharedModule {}
