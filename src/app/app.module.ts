import { AboutPageComponent } from "./about-page/about-page.component";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HeaderComponent } from "./header/header.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from "./material/material.module";
import { NgModule } from "@angular/core"
import { PersonalSummaryComponent } from "./personal-summary/personal-summary.component";
import { WorkPageComponent } from "./work-page/work-page.component";
import { WindowService } from "./utility-services/window.service";
import { ResumeComponent } from "./resume/resume.component";
import { TestimonialComponent } from "./testimonial/testimonial.component";

@NgModule({
    declarations: [
        AppComponent,
        PersonalSummaryComponent,
        HeaderComponent,
        HomePageComponent,
        WorkPageComponent,
        AboutPageComponent,
        ResumeComponent,
        TestimonialComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        MaterialModule,
        ReactiveFormsModule,
    ],
    providers: [
        WindowService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
