import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminDresseurService } from '../services/Admin-Services/Dresseurs/admin-dresseur.service';


@Component({
  selector: 'app-dresseurs',
  templateUrl: './dresseurs.component.html',
  styleUrls: ['./dresseurs.component.css']
})
export class DresseursComponent implements OnInit {

  constructor(private service : AdminDresseurService) { }

  dressuers! : any []

  ngOnInit(): void {
    this.fillGrid();
  }


  fillGrid(){
    this.service.getAllDresseurs().subscribe(res => {
      this.dressuers = res;
    })
  }

  replace(str : string) : string{
    str = str.replace('_',' ');
    return str;
  }

  filterByName(str : String){
    this.service.searchDresseur(str).subscribe((res) => {
      this.dressuers = res
    })
  }

  filterByRegion(str : String){
    if(str === "Tous les régions"){
      this.fillGrid();
    }else{
      this.service.searchDresseurByRegion(str).subscribe(res => {
        this.dressuers = res;
      })
    }
  }

  regions = [
    "Ben_Arous", "Ariana", "Tunis", "Nabeul", "Mannouba", "Bizerte", "Béja", "Jendouba", "Zaghouan", "Siliana", "Le_Kef", "Sousse", "Monastir",
    "Mahdia", "Kasserine", "Sidi_Bouzid", "Kairouan", "Gafsa", "Sfax", "Gabés", "Médenine", "Tozeur", "Kebili", "Tataouine"
  ]

}
