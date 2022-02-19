import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DogwalkerService } from '../services/Admin-Services/Dogwalkers/dogwalker.service';

@Component({
  selector: 'app-dog-walkers',
  templateUrl: './dog-walkers.component.html',
  styleUrls: ['./dog-walkers.component.css']
})
export class DogWalkersComponent implements OnInit {

  constructor(private service : DogwalkerService, private _sanitizer : DomSanitizer) { }

  dogwalkers! : any []

  ngOnInit(): void {
    this.fillGrid();
  }

  fillGrid(){
    this.service.getAllDogwalkers().subscribe(res => {
      this.dogwalkers = res;
    })
  }

  replace(str : string) : string{
    str = str.replace('_',' ');
    return str;
  }


  filterByName(str : String){
    this.service.searchDresseur(str).subscribe((res) => {
      this.dogwalkers = res
    })
  }

  filterByRegion(str : String){
    if(str === "Tous les régions"){
      this.fillGrid();
    }else{
      this.service.searchDresseurByRegion(str).subscribe(res => {
        this.dogwalkers = res;
      })
    }
  }

  convert(base64String){
    return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + base64String)
  }

  regions = [
    "Ben_Arous", "Ariana", "Tunis", "Nabeul", "Mannouba", "Bizerte", "Béja", "Jendouba", "Zaghouan", "Siliana", "Le_Kef", "Sousse", "Monastir",
    "Mahdia", "Kasserine", "Sidi_Bouzid", "Kairouan", "Gafsa", "Sfax", "Gabés", "Médenine", "Tozeur", "Kebili", "Tataouine"
  ]

}
