import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-dresseur',
  templateUrl: './add-dresseur.component.html',
  styleUrls: ['./add-dresseur.component.css']
})
export class AddDresseurComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  regions = [
    "Ben_Arous", "Ariana", "Tunis", "Nabeul", "Mannouba", "Bizerte", "Béja", "Jendouba", "Zaghouan", "Siliana", "Le_Kef", "Sousse", "Monastir",
    "Mahdia", "Kasserine", "Sidi_Bouzid", "Kairouan", "Gafsa", "Sfax", "Gabés", "Médenine", "Tozeur", "Kebili", "Tataouine"
  ]

}
