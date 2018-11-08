import { AboutPageComponent } from "./about-page/about-page.component";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireModule } from "@angular/fire";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AppComponent } from "./app.component";
import { BlogPageComponent } from "./blog-page/blog-page.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { environment } from "../environments/environment";
import { FooterComponent } from "./footer/footer.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HeaderComponent } from "./header/header.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from "./material/material.module";
import { NgModule } from "@angular/core";
import { PersonalSummaryComponent } from "./personal-summary/personal-summary.component";
import { RouterModule, Routes } from "@angular/router";
import { WorkPageComponent } from "./work-page/work-page.component";
import { HeaderService } from "./header/header.service";
import { WindowService } from "./utility-services/window.service";
import { ResumeComponent } from './resume/resume.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { PizzaPartyComponent } from './footer/footer.component';

const routes: Routes = [
    { path: "", component: HomePageComponent },
    { path: "work", component: WorkPageComponent },
    { path: "blog", component: BlogPageComponent },
    { path: "about", component: AboutPageComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        PersonalSummaryComponent,
        HeaderComponent,
        FooterComponent,
        HomePageComponent,
        WorkPageComponent,
        BlogPageComponent,
        AboutPageComponent,
        ResumeComponent,
        ServicesComponent,
        TestimonialComponent,
        PizzaPartyComponent
    ],
    imports: [
        AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireStorageModule, // imports firebase/storage only needed for storage features
        AngularFirestoreModule, // imports firebase/firestore, only needed for database features
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        MaterialModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes)
    ],
    providers: [
        HeaderService,
        WindowService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
