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
      naiss : new FormControl(new Date(this.data['data'].dateNaissance).toISOString(), [Validators.required]),
      sexe : new FormControl(this.data['data'].sexe, [Validators.required]),
      email : new FormControl(this.data['data'].email, [Validators.required]),
      ville : new FormControl(this.data['data'].ville, [Validators.required]),
      description : new FormControl(this.data['data'].description, [Validators.required]),
    })
  }

  submit(){
    const fd = new FormData();
    if(this.form.valid) {
      fd.append('id', this.data['data'].id)
      fd.append('nom', this.form.value.nom)
      fd.append('prenom', this.form.value.prenom)
      fd.append('dateNaissance', this.convertDate(this.form.value.naiss))
      fd.append('ville', this.form.value.ville)
      fd.append('sexe', this.form.value.sexe)
      fd.append('email', this.form.value.email)
      fd.append('description', this.form.value.description)

      this.service.updateDogWalker(fd).subscribe(()=>{
        this.dg.close();
        this.sb.openFromComponent(SnackAdd,{
          duration : 3000
        })
      })

    }
    
  }

  convertDate(inputFormat) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat)
    return [pad(d.getFullYear()), pad(d.getMonth()+1), d.getDate()].join('-')
  }


  regions = [
    "Ben_Arous", "Ariana", "Tunis", "Nabeul", "Mannouba", "Bizerte", "Béja", "Jendouba", "Zaghouan", "Siliana", "Le_Kef", "Sousse", "Monastir",
    "Mahdia", "Kasserine", "Sidi_Bouzid", "Kairouan", "Gafsa", "Sfax", "Gabés", "Médenine", "Tozeur", "Kebili", "Tataouine"
  ]

}
