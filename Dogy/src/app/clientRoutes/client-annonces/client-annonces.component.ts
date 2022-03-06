import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AnnonceService } from 'src/app/services/Admin-Services/Annonces/annonce.service';
import { AdminUsersService } from 'src/app/services/Admin-Services/Users/admin-users.service';
import { ClientAnnoncesAddComponent } from './client-annonces-add/client-annonces-add.component';

@Component({
  selector: 'app-client-annonces',
  templateUrl: './client-annonces.component.html',
  styleUrls: ['./client-annonces.component.css']
})
export class ClientAnnoncesComponent implements OnInit {

  constructor(private router : Router, private dialog : MatDialog, private service : AnnonceService, private userService : AdminUsersService, private _sanitizer : DomSanitizer) { }

  annonces;

  user! : User;


  ngOnInit(): void {
    if(localStorage.getItem('connected') != 'true'){
      this.router.navigateByUrl('home');
    }
    this.fillAnnonces();
  }

  openDialog(){
    this.dialog.open(ClientAnnoncesAddComponent).afterClosed().subscribe(()=> {
      this.fillAnnonces();
    })
  }

  fillAnnonces(){
    this.userService.getOneUser(localStorage.getItem('email')).subscribe(res => {
      this.user = res;
      this.service.getUserAnnonces(this.user.idUser).subscribe(res=> {
        this.annonces = res;
      })
    })
  }

  convert(base64String) {
    return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + base64String)
  }

  resolve(id){
    this.service.resolve(id).subscribe(()=>{
      this.fillAnnonces();
    })
  }

}
