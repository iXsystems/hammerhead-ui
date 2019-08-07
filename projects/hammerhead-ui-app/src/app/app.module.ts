import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { SharedComponentsModule } from './components/shared/shared-components.module';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { HomeViewComponent } from './views/home/home-view/home-view.component';

@NgModule({
    declarations: [AppComponent, HomeViewComponent, SideNavComponent, TopNavComponent],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        HttpClientModule,
        MarkdownModule.forRoot({ loader: HttpClient }),
        RouterModule.forRoot(ROUTES),
        SharedComponentsModule
    ],
    exports: [RouterModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
