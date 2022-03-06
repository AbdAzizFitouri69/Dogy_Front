import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AnnonceService } from 'src/app/services/Admin-Services/Annonces/annonce.service';

@Component({
  selector: 'app-admin-annonces',
  templateUrl: './admin-annonces.component.html',
  styleUrls: ['./admin-annonces.component.css']
})
export class AdminAnnoncesComponent implements OnInit {

  annonces;

  constructor(private router : Router, private service : AnnonceService, private _sanitizer : DomSanitizer) { }

  ngOnInit(): void {
    if(localStorage.getItem('admin') != "true"){
      this.router.navigateByUrl('/home')
    }
    this.fillAnnonces()
  }

  fillAnnonces(){
    this.service.getPending().subscribe(res => {
      this.annonces = res;
    })
  }

  convert(base64String) {
    return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + base64String)
  }

  accepter(id : Number){
    this.service.accept(id).subscribe(()=>{
      this.fillAnnonces();
    })
  }

  refuser(id : Number){
    this.service.refuse(id).subscribe(()=> {
      this.fillAnnonces();
    })
  }

}
