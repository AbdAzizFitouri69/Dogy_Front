import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Dogwalker } from 'src/app/models/Dogwalker';
import { DogwalkerService } from 'src/app/services/Admin-Services/Dogwalkers/dogwalker.service';
import { SnackAdd, SnackUpdate } from 'src/app/snackbar/snackbar';

@Component({
  selector: 'app-add-dogwalker',
  templateUrl: './add-dogwalker.component.html',
  styleUrls: ['./add-dogwalker.component.css']
})
export class AddDogwalkerComponent implements OnInit {

  constructor(private service : DogwalkerService , private dr : MatDialogRef<AddDogwalkerComponent>, private sb : MatSnackBar) { }

  form! : FormGroup;

  dw! : Dogwalker;

  ngOnInit(): void {
    this.form = new FormGroup({
      nom : new FormControl('', [Validators.required]),
      prenom : new FormControl('', [Validators.required]),
      naiss : new FormControl('', [Validators.required]),
      sexe : new FormControl('', [Validators.required]),
      email : new FormControl('', [Validators.required]),
      ville : new FormControl('', [Validators.required]),
      description : new FormControl('', [Validators.required]),
    })
  }

  submit(){
    this.dw = new Dogwalker();
    this.dw.description = this.form.value.description
    this.dw.email = this.form.value.email
    this.dw.naiss = this.form.value.naiss
    this.dw.nom = this.form.value.nom
    this.dw.prenom = this.form.value.prenom
    this.dw.sexe = this.form.value.sexe
    this.dw.ville = this.form.value.ville
    this.service.addDogwalker(this.dw).subscribe(()=>{
      this.dr.close();
      this.sb.openFromComponent(SnackAdd,{
        duration : 3000
      })
    })
  }



  regions = [
    "Ben_Arous", "Ariana", "Tunis", "Nabeul", "Mannouba", "Bizerte", "Béja", "Jendouba", "Zaghouan", "Siliana", "Le_Kef", "Sousse", "Monastir",
    "Mahdia", "Kasserine", "Sidi_Bouzid", "Kairouan", "Gafsa", "Sfax", "Gabés", "Médenine", "Tozeur", "Kebili", "Tataouine"
  ]

}
