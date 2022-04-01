import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { DetailsDogwalkerComponent } from '../dog-walkers/details-dogwalker/details-dogwalker.component';
import { DogsitterService } from '../services/Admin-Services/Dogsitters/dogsitter.service';
import { DetailsDogsitterComponent } from './details-dogsitter/details-dogsitter.component';

@Component({
  selector: 'app-dogsitters',
  templateUrl: './dogsitters.component.html',
  styleUrls: ['./dogsitters.component.css']
})
export class DogsittersComponent implements OnInit {

  constructor(private service : DogsitterService, private _sanitizer : DomSanitizer, private dg : MatDialog) { }

  dogsitters! : any[]


  ngOnInit(): void {
    this.fillGrid();
  }

  fillGrid(){
    this.service.getAllDogsitters().subscribe(res => {
      this.dogsitters = res;
    })
  }

  replace(str : string) : string{
    str = str.replace('_',' ');
    return str;
  }


  filterByName(str : String){
    this.service.searchDogsitter(str).subscribe((res) => {
      this.dogsitters = res
    })
  }

  filterByRegion(str : String){
    if(str === "Tous les régions"){
      this.fillGrid();
    }else{
      this.service.searchDogsitterByRegion(str).subscribe(res => {
        this.dogsitters = res;
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

  openDogwalkerDetails(dogsitter){
    this.dg.open(DetailsDogsitterComponent,
      { data : {
        data : dogsitter
      }})
  }

}
