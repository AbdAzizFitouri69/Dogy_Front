import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Veterinaire } from 'src/app/models/Veterinaire';
import { VeterinairesServiceService } from 'src/app/services/Admin-Services/Veterinaires/veterinaires-service.service';
import { SnackAdd, SnackUpdate } from 'src/app/snackbar/snackbar';

@Component({
  selector: 'app-update-veterinaire',
  templateUrl: './update-veterinaire.component.html',
  styleUrls: ['./update-veterinaire.component.css']
})
export class UpdateVeterinaireComponent implements OnInit {

  constructor(public dg: MatDialogRef<UpdateVeterinaireComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private service: VeterinairesServiceService, private sb: MatSnackBar) { }

  form!: FormGroup;

  vt!: Veterinaire;

  deb: string = "";
  fin: string = "";

  ngOnInit(): void {

    //console.log(this.data)


    this.deb = this.data['data'].horraire.substring(3, 8)
    this.fin = this.data['data'].horraire.substring(11, 16)
    //console.log(this.deb)
    //console.log(this.fin)

    this.form = new FormGroup({
      nom: new FormControl(this.data['data'].nom, [Validators.required]),
      prenom: new FormControl(this.data['data'].prenom, [Validators.required]),
      naiss: new FormControl(new Date(this.data['data'].dateNaissance), [Validators.required]),
      sexe: new FormControl(this.data['data'].sexe, [Validators.required]),
      email: new FormControl(this.data['data'].email, [Validators.required]),
      ville: new FormControl(this.data['data'].ville, [Validators.required]),
      description: new FormControl(this.data['data'].description, [Validators.required]),
      hor_deb: new FormControl(this.deb, [Validators.required]),
      hor_fin: new FormControl(this.fin, [Validators.required])
    })

  }

  convertDate(inputFormat) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat)
    return [pad(d.getFullYear()), pad(d.getMonth() + 1), d.getDate()].join('-')
  }

  submit() {
    const fd = new FormData();
    if (this.form.valid) {
      fd.append('id', this.data['data'].id)
      fd.append('nom', this.form.value.nom)
      fd.append('prenom', this.form.value.prenom)
      fd.append('dateNaissance', this.convertDate(this.form.value.naiss))
      fd.append('ville', this.form.value.ville)
      fd.append('sexe', this.form.value.sexe)
      fd.append('email', this.form.value.email)
      fd.append('description', this.form.value.description)
      fd.append('horraire' , this.form.value.hor_deb + " à " + this.form.value.hor_fin)
      this.service.updateVeterinaire(fd).subscribe(()=>{
        this.dg.close();
        this.sb.openFromComponent(SnackAdd,{
          duration : 3000
        })
      })
    }
    this.vt = new Veterinaire();
    this.vt.id = this.data['data'].id;
    this.vt.description = this.form.value.description
    this.vt.email = this.form.value.email
    this.vt.horraire = "De " + this.form.value.hor_deb + " à " + this.form.value.hor_fin
    this.vt.naiss = this.form.value.naiss
    this.vt.nom = this.form.value.nom
    this.vt.prenom = this.form.value.prenom
    this.vt.sexe = this.form.value.sexe
    this.vt.ville = this.form.value.ville
    //console.log(this.vt);

  }

  regions = [
    "Ben_Arous", "Ariana", "Tunis", "Nabeul", "Mannouba", "Bizerte", "Béja", "Jendouba", "Zaghouan", "Siliana", "Le_Kef", "Sousse", "Monastir",
    "Mahdia", "Kasserine", "Sidi_Bouzid", "Kairouan", "Gafsa", "Sfax", "Gabés", "Médenine", "Tozeur", "Kebili", "Tataouine"
  ]

  mornings = [
    "07:30", "08:00", "08:30", "09:00", "09:30", "10:00"
  ]

  evenings = [
    "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"
  ]

}
