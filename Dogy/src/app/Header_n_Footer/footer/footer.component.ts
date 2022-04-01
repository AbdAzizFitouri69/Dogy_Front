import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ArticlesService } from 'src/app/services/Admin-Services/Articles/articles.service';
import { DogwalkerService } from 'src/app/services/Admin-Services/Dogwalkers/dogwalker.service';
import { AdminDresseurService } from 'src/app/services/Admin-Services/Dresseurs/admin-dresseur.service';
import { AdminUsersService } from 'src/app/services/Admin-Services/Users/admin-users.service';
import { VeterinairesServiceService } from 'src/app/services/Admin-Services/Veterinaires/veterinaires-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private rt : Router,private serv_dres : AdminDresseurService, private serv_dw : DogwalkerService, private serv_user : AdminUsersService, private serv_vet : VeterinairesServiceService, private articleService : ArticlesService, private _sanitizer : DomSanitizer) { }

  dress! : any []
  vets! : any []
  users! : any []
  dws! : any []

  articles! : any[]

  ngOnInit(): void {
    this.fillArticles();
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
    this.rt.navigateByUrl('dogwalkers')
    window.scrollTo(0,0)
  }

  go_veterinaire(){
    this.rt.navigateByUrl('vétérinaires')
    window.scrollTo(0,0)
  }

  go_dresseur(){
    this.rt.navigateByUrl('dresseurs')
    window.scrollTo(0,0)
  }

  fillArticles(){
    this.articleService.getAccepted().subscribe(res => {
      this.articles = res;
    })
  }

  convert(base64String) {
    return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + base64String)
  }

}
