import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './body-components/home/home.component';
import { PokemonListComponent } from './body-components/pokemon-list/pokemon-list.component';
import { UrlComponent } from './body-components/url/url.component';
import { AboutComponent } from './body-components/about/about.component';
import { PageNotFoundComponent } from './body-components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
  },
  { 
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'pokemonList', component: PokemonListComponent
  },
  {
    path: 'url', component: UrlComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
