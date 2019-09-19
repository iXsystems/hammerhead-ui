import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
    selector: '[hhMetadataAttribute]'
})
export class MetadataDirective implements OnChanges {
    @Input('hhMetadataAttribute') public customAttribute: string;
    // tslint:disable-next-line: no-input-rename
    @Input('hhMetadataValue') public attributeValue: string;

    constructor(private el: ElementRef<HTMLElement>) {}

    public ngOnChanges(): void {
        this.el.nativeElement.setAttribute(this.customAttribute, this.attributeValue);
    }
}
