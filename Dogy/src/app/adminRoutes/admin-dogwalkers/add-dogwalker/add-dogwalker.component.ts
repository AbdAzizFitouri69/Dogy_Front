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

  constructor(private service: DogwalkerService, private dr: MatDialogRef<AddDogwalkerComponent>, private sb: MatSnackBar) { }

  regions = [
    "Ben_Arous", "Ariana", "Tunis", "Nabeul", "Mannouba", "Bizerte", "Béja", "Jendouba", "Zaghouan", "Siliana", "Le_Kef", "Sousse", "Monastir",
    "Mahdia", "Kasserine", "Sidi_Bouzid", "Kairouan", "Gafsa", "Sfax", "Gabés", "Médenine", "Tozeur", "Kebili", "Tataouine"
  ]


  form!: FormGroup;

  dw!: Dogwalker;

  selecetdFile!: File;

  imagePreview: any;

  ngOnInit(): void {
    this.form = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      naiss: new FormControl('', [Validators.required]),
      sexe: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      ville: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    })
  }

  onFileUpload(event) {
    this.selecetdFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
      console.log(this.imagePreview)
    };
    reader.readAsDataURL(this.selecetdFile);
  }


  submit() {
    console.log(this.form.value);
    const fd = new FormData();
    // this.vt = new Veterinaire();
    if (this.form.valid) {
      //this.date = new Date(this.form.value.naiss)
      fd.append('image', this.selecetdFile, this.selecetdFile.name)
      fd.append('nom', this.form.value.nom)
      fd.append('prenom', this.form.value.prenom)
      fd.append('dateNaissance', this.form.value.naiss)
      fd.append('ville', this.form.value.ville)
      fd.append('sexe', this.form.value.sexe)
      fd.append('email', this.form.value.email)
      console.log(fd.get('image'))
      console.log(fd.get('nom'))
      console.log(fd.get('prenom'))
      this.service.addDogwalker(fd).subscribe(() => {
        this.dr.close();
        this.sb.openFromComponent(SnackAdd, {
          duration: 3000
        })
      })
    }
    
  }
}