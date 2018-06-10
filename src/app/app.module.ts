import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { PersonalSummaryComponent } from './personal-summary/personal-summary.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { WorkPageComponent } from './work-page/work-page.component';
import { RouterModule, Routes } from "@angular/router";
import { BlogPageComponent } from './blog-page/blog-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { FooterContentComponent } from './footer-content/footer-content.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'work', component: WorkPageComponent },
    { path: 'blog', component: BlogPageComponent },
    { path: 'about', component: AboutPageComponent }
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
        FooterContentComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        MaterialModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
