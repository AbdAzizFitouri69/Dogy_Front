import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private rt : Router,private serv_dres : AdminDresseurService, private serv_dw : DogwalkerService, private serv_user : AdminUsersService, private serv_vet : VeterinairesServiceService) { }

  dress! : any []
  vets! : any []
  users! : any []
  dws! : any []

  ngOnInit(): void {
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

}
