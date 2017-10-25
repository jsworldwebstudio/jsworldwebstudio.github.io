import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavAreaComponent } from '././components/nav-area/nav-area.component';
import { FooterAreaComponent } from '././components/footer-area/footer-area.component';
import { HomeComponent } from '././components/home/home.component';
import { AboutComponent } from '././components/about/about.component';
import { ServicesComponent } from '././components/services/services.component';
import { FunPageComponent } from '././components/fun-page/fun-page.component';
import { ContactComponent } from '././components/contact/contact.component';
import { MoviesComponent } from '././components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    NavAreaComponent,
    FooterAreaComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    FunPageComponent,
    ContactComponent,
    MoviesComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    JsonpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
