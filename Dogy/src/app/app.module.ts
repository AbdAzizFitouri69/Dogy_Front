import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OwlModule } from 'ngx-owl-carousel';

import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header_n_Footer/header/header.component';
import { FooterComponent } from './Header_n_Footer/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { LostAndFoundComponent } from './lost-and-found/lost-and-found.component';
import { VenteComponent } from './vente/vente.component';
import { AccouplementComponent } from './accouplement/accouplement.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminSideBarComponent } from './admin-side-bar/admin-side-bar.component';
import { AdminNavBarComponent } from './admin-nav-bar/admin-nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { ClientHomeComponent } from './client-home/client-home.component';
import { VeterinairesComponent } from './veterinaires/veterinaires.component';
import { DresseursComponent } from './dresseurs/dresseurs.component';
import { DogWalkersComponent } from './dog-walkers/dog-walkers.component';
import { SidenavModule } from 'angular-ng-sidenav';
import { AdminDresseursComponent } from './adminRoutes/admin-dresseurs/admin-dresseurs.component';
import { AdminDogwalkersComponent } from './adminRoutes/admin-dogwalkers/admin-dogwalkers.component';
import { AdminVeterinairesComponent } from './adminRoutes/admin-veterinaires/admin-veterinaires.component';
import { AdminDashComponent } from './adminRoutes/admin-dash/admin-dash.component';
import { AddDresseurComponent } from './adminRoutes/admin-dresseurs/add-dresseur/add-dresseur.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { AddDogwalkerComponent } from './adminRoutes/admin-dogwalkers/add-dogwalker/add-dogwalker.component';
import { AddVeterinaireComponent } from './adminRoutes/admin-veterinaires/add-veterinaire/add-veterinaire.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HoldableDirective } from './directives/holdable.directive';
import { UpdateVeterinaireComponent } from './adminRoutes/admin-veterinaires/update-veterinaire/update-veterinaire.component';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LostAndFoundComponent,
    VenteComponent,
    AccouplementComponent,
    AnnoncesComponent,
    PageNotFoundComponent,
    AdminHomeComponent,
    AdminSideBarComponent,
    AdminNavBarComponent,
    ClientHomeComponent,
    VeterinairesComponent,
    DresseursComponent,
    DogWalkersComponent,
    AdminDresseursComponent,
    AdminDogwalkersComponent,
    AdminVeterinairesComponent,
    AdminDashComponent,
    AddDresseurComponent,
    AddDogwalkerComponent,
    AddVeterinaireComponent,
    HoldableDirective,
    UpdateVeterinaireComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OwlModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    RouterModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    SidenavModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSnackBarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
