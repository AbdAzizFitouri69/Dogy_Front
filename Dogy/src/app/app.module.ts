import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OwlModule } from 'ngx-owl-carousel'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header_n_Footer/header/header.component';
import { FooterComponent } from './Header_n_Footer/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    OwlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
