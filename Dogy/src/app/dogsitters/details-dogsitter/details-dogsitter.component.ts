import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { User } from 'src/app/models/User';
import { DogsitterService } from 'src/app/services/Admin-Services/Dogsitters/dogsitter.service';
import { AdminUsersService } from 'src/app/services/Admin-Services/Users/admin-users.service';

@Component({
  selector: 'app-details-dogsitter',
  templateUrl: './details-dogsitter.component.html',
  styleUrls: ['./details-dogsitter.component.css']
})
export class DetailsDogsitterComponent implements OnInit {


  starRating = 0;

  connected = (localStorage.getItem('connected') != null)

  constructor(private _sanitizer : DomSanitizer, @Inject(MAT_DIALOG_DATA) public data : any, private service : DogsitterService, private sb : MatSnackBar, private userService : AdminUsersService) { }

  dogsitter! : any;

  user! : User;

  fiables! : any[]
  non_fiables! : any[]


  ngOnInit(): void {
    this.dogsitter = this.data['data']
    this.getfiables();
  }

  convert(base64String) {
    return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + base64String)
  }

  replace(str: string): string {
    str = str.replace('_', ' ');
    return str;
  }

  replaceMonths(str: string | null){
    if (str) {
      str = str.replace('January', 'Janvier')
      str = str.replace('February', 'Février')
      str = str.replace('March', 'Mars')
      str = str.replace('April', 'Avril')
      str = str.replace('Mai', 'May')
      str = str.replace('June', 'Juin')
      str = str.replace('July', 'Juillet')
      str = str.replace('August', 'Aout')
      str = str.replace('September', 'Septembre')
      str = str.replace('October', 'Octobre')
      str = str.replace('November', 'Novembre')
      str = str.replace('December', 'Décembre')
    }
    return str;
  }

  getfiables(){
    this.service.getDogsitterFiableRating(this.dogsitter.id).subscribe(res => {
      this.fiables = res
      this.service.getDogsitterNonFiableRatings(this.dogsitter.id).subscribe(res => {
        this.non_fiables = res
      })
    })
  }

  getNonFiables(){
    this.service.getDogsitterNonFiableRatings(this.dogsitter.id).subscribe(res => {
      this.non_fiables = res
    })
  }

  makeFiable(idDogwalker){
    this.userService.getOneUser(localStorage.getItem('email')).subscribe(res => {
      this.user = res;
      //console.log("User ID = "+this.user.idUser)
      //console.log("Dogwalker ID = "+idDogwalker)
      this.service.addFiable(idDogwalker,this.user.idUser).subscribe(()=>{
        this.sb.open("Vous avez Marqué ce Dogwalker comme Fiable","Fermer",{duration : 3000})
        this.getfiables();
        //this.getNonFiables;
      })
    })
  }

  makeNonFiable(idDogwalker){
    this.userService.getOneUser(localStorage.getItem('email')).subscribe(res => {
      this.user = res;
      this.service.addNonFiable(idDogwalker,this.user.idUser).subscribe(()=>{
        this.sb.open("Vous avez Marqué ce Dogwalker comme Non Fiable","Fermer",{duration : 3000})
        this.getfiables();
        //this.getNonFiables;
      })
    })
  }


}
