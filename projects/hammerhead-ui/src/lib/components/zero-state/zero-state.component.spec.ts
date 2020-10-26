import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { take } from 'rxjs/operators';
import { ZeroStateComponent } from './zero-state.component';
import { SimpleChange } from '@angular/core';

describe('ZeroStateComponent', () => {
    let fixture: ComponentFixture<ZeroStateComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ZeroStateComponent],
            imports: [CommonModule, FlexLayoutModule, MatButtonModule, MatCardModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ZeroStateComponent);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(fixture.componentInstance).toBeTruthy();
    });

    it('should have a default message', () => expect(fixture.componentInstance.message).toBeTruthy());

    it('default message should be of type "string"', () =>
        expect(typeof fixture.componentInstance.message).toEqual('string'));

    it(`default message should be "${ZeroStateComponent.DEFAULT_MESSAGE}"`, () =>
        expect(fixture.componentInstance.message).toEqual(ZeroStateComponent.DEFAULT_MESSAGE));

    it('message HTML should update when message changes', () => {
        const NEW_MESSAGE = 'Hello zero state!';

        fixture.componentInstance.message = NEW_MESSAGE;
        fixture.detectChanges();
        expect((fixture.nativeElement as HTMLElement).getElementsByTagName('p').item(0).innerText).toEqual(NEW_MESSAGE);
    });

    it('default hasAction value should be false', () => expect(fixture.componentInstance.hasAction).toBe(false));

    it('should not show a button when hasAction is false', () =>
        expect((fixture.nativeElement as HTMLElement).getElementsByTagName('button').item(0)).toBeFalsy());

    it('should show a button when hasAction is true', () => {
        fixture.componentInstance.hasAction = true;
        fixture.detectChanges();
        expect((fixture.nativeElement as HTMLElement).getElementsByTagName('button').item(0)).toBeTruthy();
    });

    it(`default action button text should be "${ZeroStateComponent.DEFAULT_ACTION_TEXT}"`, () =>
        expect(fixture.componentInstance.actionText).toEqual(ZeroStateComponent.DEFAULT_ACTION_TEXT));

    it('when actionText changes, the button text should update', () => {
        const NEW_BUTTON_TEXT = 'Hello button!';

        fixture.componentInstance.hasAction = true;
        fixture.componentInstance.actionText = NEW_BUTTON_TEXT;
        fixture.detectChanges();
        expect(
            (fixture.nativeElement as HTMLElement)
                .getElementsByClassName('mat-button-wrapper')
                .item(0)
                .textContent.trim()
        ).toEqual(NEW_BUTTON_TEXT);
    });

    it(`default action position should be "${ZeroStateComponent.DEFAULT_ACTION_TEXT}"`, () =>
        expect(fixture.componentInstance.actionPosition).toEqual(ZeroStateComponent.DEFAULT_ACTION_POSITION));

    it('should have a message before the action button if actionPosition is "below" or "after"', () => {
        fixture.componentInstance.hasAction = true;
        fixture.detectChanges();

        let componentChildren = (fixture.nativeElement as HTMLElement).getElementsByTagName('mat-card').item(0)
            .children;
        expect(componentChildren.item(0).tagName.toLowerCase()).toBe('p');
        expect(componentChildren.item(1).tagName.toLowerCase()).toBe('button');

        fixture.componentInstance.actionPosition = 'after';
        fixture.detectChanges();

        componentChildren = (fixture.nativeElement as HTMLElement).getElementsByTagName('mat-card').item(0).children;
        expect(componentChildren.item(0).tagName.toLowerCase()).toBe('p');
        expect(componentChildren.item(1).tagName.toLowerCase()).toBe('button');
    });

    it('should have a message after the action button if actionPosition is "above" or "before"', () => {
        fixture.componentInstance.hasAction = true;
        fixture.componentInstance.actionPosition = 'above';
        fixture.detectChanges();

        let componentChildren = (fixture.nativeElement as HTMLElement).getElementsByTagName('mat-card').item(0)
            .children;
        expect(componentChildren.item(0).tagName.toLowerCase()).toBe('button');
        expect(componentChildren.item(1).tagName.toLowerCase()).toBe('p');

        fixture.componentInstance.actionPosition = 'before';
        fixture.detectChanges();

        componentChildren = (fixture.nativeElement as HTMLElement).getElementsByTagName('mat-card').item(0).children;
        expect(componentChildren.item(0).tagName.toLowerCase()).toBe('button');
        expect(componentChildren.item(1).tagName.toLowerCase()).toBe('p');
    });

    it('doAction should emit an event when an action button is clicked', () => {
        let wasEventEmitted = false;
        fixture.componentInstance.doAction.pipe(take(1)).subscribe(() => (wasEventEmitted = true));

        fixture.componentInstance.hasAction = true;
        fixture.detectChanges();

        (fixture.nativeElement.getElementsByTagName('button').item(0) as HTMLButtonElement).click();

        expect(wasEventEmitted).toBe(true);
    });

    it('flexLayout prop should update when actionPosition is changed', () => {
        expect(fixture.componentInstance.flexLayout).toEqual('column');

        fixture.componentInstance.actionPosition = 'before';
        fixture.componentInstance.ngOnChanges({
            actionPosition: new SimpleChange('below', fixture.componentInstance.actionPosition, false)
        });
        fixture.detectChanges();

        expect(fixture.componentInstance.flexLayout).toEqual('row');
    });
});
