import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashComponent } from './adminRoutes/admin-dash/admin-dash.component';
import { AdminDogwalkersComponent } from './adminRoutes/admin-dogwalkers/admin-dogwalkers.component';
import { AdminDresseursComponent } from './adminRoutes/admin-dresseurs/admin-dresseurs.component';
import { AdminVeterinairesComponent } from './adminRoutes/admin-veterinaires/admin-veterinaires.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { DogWalkersComponent } from './dog-walkers/dog-walkers.component';
import { DresseursComponent } from './dresseurs/dresseurs.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { VeterinairesComponent } from './veterinaires/veterinaires.component';

const routes: Routes = [
  { path : 'home' , component : HomeComponent },
  { path : 'annonces', component : AnnoncesComponent },
  //{ path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path : 'vets', component : VeterinairesComponent},
  { path : 'dress', component : DresseursComponent},
  { path : 'dw', component : DogWalkersComponent},
  { path : 'a_vets' , component : AdminVeterinairesComponent},
  { path : 'a_dress' , component : AdminDresseursComponent},
  { path : 'a_dw' , component : AdminDogwalkersComponent},
  { path : 'a_dash' , component : AdminDashComponent},
  { path: '**', component: PageNotFoundComponent },
  //{ path : "articles", component :  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
