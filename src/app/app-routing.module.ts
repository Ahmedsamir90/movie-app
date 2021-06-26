import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { PeopleComponent } from './components/people/people.component';
import { TvComponent } from './components/tv/tv.component';
import { MoviesComponent } from './components/movies/movies.component';
import { HomeComponent } from './components/home/home.component';
import { MediaDetailsComponent } from './components/media-details/media-details.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'' , redirectTo:'home' , pathMatch:'full'},
  {path:'home' , canActivate:[AuthGuard] , component:HomeComponent},
  {path:'movies/:page', canActivate:[AuthGuard] , component:MoviesComponent},
  {path:'tvshows/:page', canActivate:[AuthGuard] , component:TvComponent},
  {path:'people/:page', canActivate:[AuthGuard] , component:PeopleComponent},
  {path:'mediaDetails/:type/:id', canActivate:[AuthGuard] , component:MediaDetailsComponent},
  


  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent},


  {path:'**' , component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
