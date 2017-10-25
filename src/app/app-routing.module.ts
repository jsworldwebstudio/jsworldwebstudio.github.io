import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterLinkActive } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { FunPageComponent } from './components/fun-page/fun-page.component';
import { ContactComponent } from './components/contact/contact.component';
import { MovieComponent } from './components/movie/movie.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'fun_page',
    component: FunPageComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'movie/:id',
    component: MovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*
const routes: Routes = [
  {
    path: '',
    children: []
  }
];
*/
