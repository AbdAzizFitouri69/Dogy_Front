import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dog-walkers',
  templateUrl: './dog-walkers.component.html',
  styleUrls: ['./dog-walkers.component.css']
})
export class DogWalkersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  regions = [
    "Ben_Arous", "Ariana", "Tunis", "Nabeul", "Mannouba", "Bizerte", "Béja", "Jendouba", "Zaghouan", "Siliana", "Le_Kef", "Sousse", "Monastir",
    "Mahdia", "Kasserine", "Sidi_Bouzid", "Kairouan", "Gafsa", "Sfax", "Gabés", "Médenine", "Tozeur", "Kebili", "Tataouine"
  ]

}
