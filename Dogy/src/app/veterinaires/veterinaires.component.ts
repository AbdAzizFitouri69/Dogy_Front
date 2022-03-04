import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { VeterinairesServiceService } from '../services/Admin-Services/Veterinaires/veterinaires-service.service';

@Component({
  selector: 'app-veterinaires',
  templateUrl: './veterinaires.component.html',
  styleUrls: ['./veterinaires.component.css']
})
export class VeterinairesComponent implements OnInit {

  constructor(private router : Router, private service : VeterinairesServiceService, private _sanitizer : DomSanitizer) { }

  vets;

  ngOnInit(): void {
    console.log(this.router.url);
    this.fillGrid();
  }

  fillGrid(){
    this.service.getAllVeterinaires().subscribe(res=> {
      this.vets = res;
    })
  }

  convert(base64String){
    return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + base64String)
  }

  replace(str : string) : string{
    str = str.replace('_',' ');
    return str;
  }


  filterByName(str : String){
    this.service.searchVeterinaireName(str).subscribe((res) => {
      this.vets = res;
    })
  }

  filterByRegion(str : String){
    if(str === "Tous les régions"){
      this.fillGrid();
    }else{
      this.service.searchVeterinaireRegion(str).subscribe(res => {
        this.vets = res;
      })
    }
  }




  regions = [
    "Ben_Arous", "Ariana", "Tunis", "Nabeul", "Mannouba", "Bizerte", "Béja", "Jendouba", "Zaghouan", "Siliana", "Le_Kef", "Sousse", "Monastir",
    "Mahdia", "Kasserine", "Sidi_Bouzid", "Kairouan", "Gafsa", "Sfax", "Gabés", "Médenine", "Tozeur", "Kebili", "Tataouine"
  ]

}
