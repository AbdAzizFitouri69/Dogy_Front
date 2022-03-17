import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { ArticlesService } from '../services/Admin-Services/Articles/articles.service';
import { DogwalkerService } from '../services/Admin-Services/Dogwalkers/dogwalker.service';
import { AdminDresseurService } from '../services/Admin-Services/Dresseurs/admin-dresseur.service';
import { AdminUsersService } from '../services/Admin-Services/Users/admin-users.service';
import { VeterinairesServiceService } from '../services/Admin-Services/Veterinaires/veterinaires-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private rt : Router,private serv_dres : AdminDresseurService, private serv_dw : DogwalkerService, private serv_user : AdminUsersService, private serv_vet : VeterinairesServiceService, private dg: MatDialog, private articleService : ArticlesService, private _sanitizer : DomSanitizer) { }

  dress! : any []
  vets! : any []
  users! : any []
  dws! : any []

  articles! : any[]

  connected = localStorage.getItem('connected');

  ngOnInit(): void {
    this.fillArticles()
    this.serv_dres.getAllDresseurs().subscribe((res) => {
      this.dress = res
    })
    this.serv_vet.getAllVeterinaires().subscribe((res) => {
      this.vets = res;
    })
    this.serv_user.getAllUsers().subscribe((res) => {
      this.users = res
    })
    this.serv_dw.getAllDogwalkers().subscribe((res) => {
      this.dws = res
    })
  }

  go_dogwalking(){
    this.rt.navigateByUrl('dw')
    window.scrollTo(0,0)
  }

  go_veterinaire(){
    this.rt.navigateByUrl('vets')
    window.scrollTo(0,0)
  }

  go_dresseur(){
    this.rt.navigateByUrl('dress')
    window.scrollTo(0,0)
  }

  loginDialog(){
    this.dg.open(LoginComponent).afterClosed().subscribe(()=> {
      console.log('Admin : ' + localStorage.getItem('Admin'))
      console.log('User : ' + localStorage.getItem('User'))
    })
  }

  fillArticles(){
    this.articleService.getAccepted().subscribe(res => {
      this.articles = res;
    })
  }

  convert(base64String) {
    return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + base64String)
  }

  homeSlider = { items: 1, dots: true, autoplay: true , loop : true , autoplayHoverPause : true}

}
