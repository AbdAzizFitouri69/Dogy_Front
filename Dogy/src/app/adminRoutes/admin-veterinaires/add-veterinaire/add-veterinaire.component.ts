import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Veterinaire } from 'src/app/models/Veterinaire';
import { VeterinairesServiceService } from 'src/app/services/Admin-Services/Veterinaires/veterinaires-service.service';
import { SnackAdd } from 'src/app/snackbar/snackbar';
import { VeterinairesComponent } from 'src/app/veterinaires/veterinaires.component';

@Component({
  selector: 'app-add-veterinaire',
  templateUrl: './add-veterinaire.component.html',
  styleUrls: ['./add-veterinaire.component.css']
})
export class AddVeterinaireComponent implements OnInit {

  form!: FormGroup;

  vt!: Veterinaire;

  date! : Date;


  selecetdFile!: File;

  imagePreview: any;

  constructor(private service: VeterinairesServiceService, private sb: MatSnackBar, private dg: MatDialogRef<AddVeterinaireComponent>) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      naiss: new FormControl('', [Validators.required]),
      sexe: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      ville: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      hor_deb: new FormControl('', [Validators.required]),
      hor_fin: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required])
    })
  }


  onFileUpload(event) {
    this.selecetdFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
      //console.log(this.imagePreview)
    };
    reader.readAsDataURL(this.selecetdFile);
  }

  submit() {
    //console.log(this.form.value);
    const fd = new FormData();
    // this.vt = new Veterinaire();
    if (this.form.valid) {
      this.date = new Date(this.form.value.naiss)
      fd.append('image', this.selecetdFile, this.selecetdFile.name)
      fd.append('nom', this.form.value.nom)
      fd.append('prenom', this.form.value.prenom)
      fd.append('dateNaissance', this.form.value.naiss)
      fd.append('ville' , this.form.value.ville)
      fd.append('sexe', this.form.value.sexe)
      fd.append('email', this.form.value.email)
      fd.append('horraire', "De " + this.form.value.hor_deb + " à " + this.form.value.hor_fin)
      //   this.vt.description = this.form.value.description
      //   this.vt.email = this.form.value.email
      //   this.vt.horraire = "De " + this.form.value.hor_deb + " à " + this.form.value.hor_fin
      //   this.vt.naiss = this.form.value.naiss
      //   this.vt.nom = this.form.value.nom
      //   this.vt.prenom = this.form.value.prenom
      //   this.vt.sexe = this.form.value.sexe
      //   this.vt.ville = this.form.value.ville
      //   fd.forEach(element => {
      //     this.vt.image = element
      //   })
      //console.log(fd.get('image'))
      //console.log(fd.get('nom'))
      //console.log(fd.get('prenom'))
      this.service.addVeterinaire(fd).subscribe(() => {
        this.dg.close();
        this.sb.openFromComponent(SnackAdd, {
          duration: 3000
        })
      })
    }
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


