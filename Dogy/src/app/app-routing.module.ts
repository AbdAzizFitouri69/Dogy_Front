import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAnnoncesComponent } from './adminRoutes/admin-annonces/admin-annonces.component';
import { AdminArticlesComponent } from './adminRoutes/admin-articles/admin-articles.component';
import { AdminDashComponent } from './adminRoutes/admin-dash/admin-dash.component';
import { AdminDogsittersComponent } from './adminRoutes/admin-dogsitters/admin-dogsitters.component';
import { AdminDogwalkersComponent } from './adminRoutes/admin-dogwalkers/admin-dogwalkers.component';
import { AdminDresseursComponent } from './adminRoutes/admin-dresseurs/admin-dresseurs.component';
import { AdminUsersComponent } from './adminRoutes/admin-users/admin-users.component';
import { AdminVeterinairesComponent } from './adminRoutes/admin-veterinaires/admin-veterinaires.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { ArticlesComponent } from './articles/articles.component';
import { ClientAnnoncesComponent } from './clientRoutes/client-annonces/client-annonces.component';
import { ClientArticlesComponent } from './clientRoutes/client-articles/client-articles.component';
import { DogWalkersComponent } from './dog-walkers/dog-walkers.component';
import { DogsittersComponent } from './dogsitters/dogsitters.component';
import { DresseursComponent } from './dresseurs/dresseurs.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TstComponent } from './Test_Upload/tst/tst.component';
import { VeterinairesComponent } from './veterinaires/veterinaires.component';

const routes: Routes = [
  { path : 'home' , component : HomeComponent },
  { path : 'annonces', component : AnnoncesComponent },
  { path : 'articles', component : ArticlesComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path : 'vétérinaires', component : VeterinairesComponent},
  { path : 'dresseurs', component : DresseursComponent},
  { path : 'dogwalkers', component : DogWalkersComponent},
  { path : 'dogsitters', component : DogsittersComponent},
  { path : 'a_vets' , component : AdminVeterinairesComponent},
  { path : 'a_dress' , component : AdminDresseursComponent},
  { path : 'a_dw' , component : AdminDogwalkersComponent},
  { path : 'a_ds' , component : AdminDogsittersComponent},
  { path : 'a_dash' , component : AdminDashComponent},
  { path : 'a_users' , component : AdminUsersComponent},
  { path : 'a_annonces' , component : AdminAnnoncesComponent},
  { path : 'a_articles' , component : AdminArticlesComponent},
  { path : 'test' , component : TstComponent},
  { path : 'client_annonces' , component : ClientAnnoncesComponent},
  { path : 'client_articles' , component : ClientArticlesComponent},
  { path: '**', component: PageNotFoundComponent },
  //{ path : "articles", component :  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
