import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HammerheadUiModule } from 'hammerhead-ui';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, HammerheadUiModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
