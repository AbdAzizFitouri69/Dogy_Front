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
import { AdminDresseursComponent, UpdateDresseurDialog } from './adminRoutes/admin-dresseurs/admin-dresseurs.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HoldableDirective } from './directives/holdable.directive';
import { UpdateVeterinaireComponent } from './adminRoutes/admin-veterinaires/update-veterinaire/update-veterinaire.component';
import { UpdateDogwalkerComponent } from './adminRoutes/admin-dogwalkers/update-dogwalker/update-dogwalker.component';
import { AdminUsersComponent } from './adminRoutes/admin-users/admin-users.component';
import { BlacklistComponent } from './adminRoutes/admin-users/Blacklist/blacklist/blacklist.component';
import { ReasonComponent } from './adminRoutes/admin-users/reason/reason.component';
import { TstComponent } from './Test_Upload/tst/tst.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './login/signup/signup.component';
import { ClientAnnoncesComponent } from './clientRoutes/client-annonces/client-annonces.component';
import { ClientArticlesComponent } from './clientRoutes/client-articles/client-articles.component';
import { ClientAnnoncesAddComponent } from './clientRoutes/client-annonces/client-annonces-add/client-annonces-add.component';
import { AdminAnnoncesComponent } from './adminRoutes/admin-annonces/admin-annonces.component';
import { ClientArticleAddComponent } from './clientRoutes/client-articles/client-article-add/client-article-add.component';
import { ArticlesComponent } from './articles/articles.component';
import { CommentsComponent } from './articles/comments/comments.component';
import { DetailsDogwalkerComponent } from './dog-walkers/details-dogwalker/details-dogwalker.component';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialLoginModule } from 'angularx-social-login';
import { DetailsDresseurComponent } from './dresseurs/details-dresseur/details-dresseur.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AdminArticlesComponent } from './adminRoutes/admin-articles/admin-articles.component';
import { VerificationComponent } from './login/signup/verification/verification.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpinnerOverlayComponent } from './spinner-overlay/spinner-overlay.component';









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
    UpdateVeterinaireComponent,
    UpdateDogwalkerComponent,
    AdminUsersComponent,
    BlacklistComponent,
    ReasonComponent,
    TstComponent,
    LoginComponent,
    UpdateDresseurDialog,
    SignupComponent,
    ClientAnnoncesComponent,
    ClientArticlesComponent,
    ClientAnnoncesAddComponent,
    AdminAnnoncesComponent,
    ClientArticleAddComponent,
    ArticlesComponent,
    CommentsComponent,
    DetailsDogwalkerComponent,
    DetailsDresseurComponent,
    AdminArticlesComponent,
    VerificationComponent,
    SpinnerOverlayComponent
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
    MatSnackBarModule,
    FormsModule,
    SocialLoginModule,
    AngularEditorModule,
    MatProgressSpinnerModule


  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      authLogin: true,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('876637315451-ap3uqnc9k7g4gdeokp1kt0g6hqni427d.apps.googleusercontent.com')
        }
        ,
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('659896935219080')
        }
      ]
    }
  }, SocialAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
