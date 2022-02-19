import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Dogwalker } from 'src/app/models/Dogwalker';
import { DogwalkerService } from 'src/app/services/Admin-Services/Dogwalkers/dogwalker.service';
import { SnackAdd } from 'src/app/snackbar/snackbar';

@Component({
  selector: 'app-update-dogwalker',
  templateUrl: './update-dogwalker.component.html',
  styleUrls: ['./update-dogwalker.component.css']
})
export class UpdateDogwalkerComponent implements OnInit {

  constructor(public dg : MatDialogRef<UpdateDogwalkerComponent> , @Inject(MAT_DIALOG_DATA) public data : any , private service : DogwalkerService, private sb : MatSnackBar) { }

  form! : FormGroup;

  dw! : Dogwalker;



  ngOnInit(): void {
    this.form = new FormGroup({
      nom : new FormControl(this.data['data'].nom, [Validators.required]),
      prenom : new FormControl(this.data['data'].prenom, [Validators.required]),
      naiss : new FormControl(new Date(this.data['data'].naiss), [Validators.required]),
      sexe : new FormControl(this.data['data'].sexe, [Validators.required]),
      email : new FormControl(this.data['data'].email, [Validators.required]),
      ville : new FormControl(this.data['data'].ville, [Validators.required]),
      description : new FormControl(this.data['data'].description, [Validators.required]),
    })
  }

  submit(){
    this.dw = new Dogwalker();
    this.dw.id = this.data['data'].id;
    this.dw.description = this.form.value.description
    this.dw.email = this.form.value.email
    this.dw.naiss = this.form.value.naiss
    this.dw.nom = this.form.value.nom
    this.dw.prenom = this.form.value.prenom
    this.dw.sexe = this.form.value.sexe
    this.dw.ville = this.form.value.ville
    console.log(this.dw);
    // this.service.addDogwalker(this.dw).subscribe(()=>{
    //   this.dg.close();
    //   this.sb.openFromComponent(SnackAdd,{
    //     duration : 3000
    //   })
    // })
  }


  regions = [
    "Ben_Arous", "Ariana", "Tunis", "Nabeul", "Mannouba", "Bizerte", "Béja", "Jendouba", "Zaghouan", "Siliana", "Le_Kef", "Sousse", "Monastir",
    "Mahdia", "Kasserine", "Sidi_Bouzid", "Kairouan", "Gafsa", "Sfax", "Gabés", "Médenine", "Tozeur", "Kebili", "Tataouine"
  ]

}
