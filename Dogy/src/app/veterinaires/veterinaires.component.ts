import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-veterinaires',
  templateUrl: './veterinaires.component.html',
  styleUrls: ['./veterinaires.component.css']
})
export class VeterinairesComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
    console.log(this.router.url);
  }

  regions = [
    "Ben_Arous", "Ariana", "Tunis", "Nabeul", "Mannouba", "Bizerte", "Béja", "Jendouba", "Zaghouan", "Siliana", "Le_Kef", "Sousse", "Monastir",
    "Mahdia", "Kasserine", "Sidi_Bouzid", "Kairouan", "Gafsa", "Sfax", "Gabés", "Médenine", "Tozeur", "Kebili", "Tataouine"
  ]

}
