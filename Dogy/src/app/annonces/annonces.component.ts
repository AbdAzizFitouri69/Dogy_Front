import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AnnonceService } from '../services/Admin-Services/Annonces/annonce.service';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})
export class AnnoncesComponent implements OnInit {

  constructor(private service : AnnonceService, private _sanitizer : DomSanitizer) { }

  ngOnInit(): void {
    this.fillAnnonces();
  }

  city;

  regions = [
    "Ben_Arous", "Ariana", "Tunis", "Nabeul", "Mannouba", "Bizerte", "Béja", "Jendouba", "Zaghouan", "Siliana", "Le_Kef", "Sousse", "Monastir",
    "Mahdia", "Kasserine", "Sidi_Bouzid", "Kairouan", "Gafsa", "Sfax", "Gabés", "Médenine", "Tozeur", "Kebili", "Tataouine"
  ]

  annonces;

  fillAnnonces(){
      this.service.getAccepted().subscribe(res=> {
        this.annonces = res;
      })
    
  }

  convert(base64String) {
    return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + base64String)
  }



  onTypeChange(type : string){
    this.city = (<HTMLInputElement>document.getElementById("inputState")).value;
    console.log(this.city)
    if(type == "Accouplement"){
      if(this.city == "Tous les régions"){
        this.service.getAcceptedAccouplemnt().subscribe(res => {
          this.annonces = res;
        })
      }else{
        this.service.getAcceptedAccouplementCity(this.city).subscribe(res => {
          this.annonces = res;
        })
      }
    }
    if(type == "Vente"){
      if(this.city == "Tous les régions"){
        this.service.getAcceptedVente().subscribe(res => {
          this.annonces = res;
        })
      }else{
        this.service.getAcceptedVenteCity(this.city).subscribe(res => {
          this.annonces = res;
        })
      }
    }
    if(type == "Lost"){
      if(this.city == "Tous les régions"){
        this.service.getAcceptedLost().subscribe(res => {
          this.annonces = res;
        })
      }else{
        this.service.getAcceptedLostCity(this.city).subscribe(res => {
          this.annonces = res;
        })
      }
    }
    if(type == "Found"){
      if(this.city == "Tous les régions"){
        this.service.getAcceptedFound().subscribe(res => {
          this.annonces = res;
        })
      }else{
        this.service.getAcceptedFoundCity(this.city).subscribe(res => {
          this.annonces = res;
        })
      }
    }
    if(type == "Tous les types"){
      if(this.city == "Tous les régions"){
        this.fillAnnonces();
      }
      else{
        //GET ALL BY CITY OPERATION HERE
      }
    }
  }

  type;

  onCityChange(){
    console.log("CHANGED")
    this.city = (<HTMLInputElement>document.getElementById("inputState")).value;
    this.type = (<HTMLInputElement>document.getElementById("inputType")).value;
    if(this.city == "Tous les régions"){
      if(this.type == "Tous les types"){
        this.service.getAccepted().subscribe(res => {
          this.annonces = res
        })
      }
      if(this.type == "Accouplement"){
        this.service.getAcceptedAccouplemnt().subscribe(res=> {
          this.annonces = res;
        })
      }
      if(this.type == "Vente"){
        this.service.getAcceptedVente().subscribe(res => {
          this.annonces = res;
        })
      }
      if(this.type == "Lost"){
        this.service.getAcceptedLost().subscribe(res => {
          this.annonces = res
        })
      }
      if(this.type == "Found"){
        this.service.getAcceptedFound().subscribe(res => {
          this.annonces = res;
        })
      }
    }else{
      if(this.type == "Tous les types"){
        this.service.getAcceptedCity(this.city).subscribe(res => {
          this.annonces = res
        })
      }
      if(this.type == "Accouplement"){
        this.service.getAcceptedAccouplementCity(this.city).subscribe(res=> {
          this.annonces = res;
        })
      }
      if(this.type == "Vente"){
        this.service.getAcceptedVenteCity(this.city).subscribe(res => {
          this.annonces = res;
        })
      }
      if(this.type == "Lost"){
        this.service.getAcceptedLostCity(this.city).subscribe(res => {
          this.annonces = res
        })
      }
      if(this.type == "Found"){
        this.service.getAcceptedFoundCity(this.city).subscribe(res => {
          this.annonces = res;
        })
      }
    }
  }

}
