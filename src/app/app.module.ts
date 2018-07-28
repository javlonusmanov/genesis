import { AboutPageComponent } from './about-page/about-page.component';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './footer/footer.component';
import { FooterContentComponent, PizzaPartyComponent } from './footer-content/footer-content.component';
import { FormsModule } from '@angular/forms'
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { PersonalSummaryComponent } from './personal-summary/personal-summary.component';
import { RouterModule, Routes } from '@angular/router';
import { WorkPageComponent } from './work-page/work-page.component';
import { environment } from '../environments/environment';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

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
        FooterContentComponent,
        PizzaPartyComponent
    ],
    entryComponents: [
        PizzaPartyComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebase, 'genesis-app'),
        AngularFirestoreModule, // imports firebase/firestore, only needed for database features
        AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
        AngularFireStorageModule, // imports firebase/storage only needed for storage features
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
