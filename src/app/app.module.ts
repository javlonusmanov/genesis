import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { PersonalSummaryComponent } from './personal-summary/personal-summary.component';


@NgModule({
    declarations: [
        AppComponent,
        PersonalSummaryComponent
    ],
    imports: [
        BrowserModule,
        MaterialModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
