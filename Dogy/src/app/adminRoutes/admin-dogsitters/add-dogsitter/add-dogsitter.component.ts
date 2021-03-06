import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DogsitterService } from 'src/app/services/Admin-Services/Dogsitters/dogsitter.service';

@Component({
  selector: 'app-add-dogsitter',
  templateUrl: './add-dogsitter.component.html',
  styleUrls: ['./add-dogsitter.component.css']
})
export class AddDogsitterComponent implements OnInit {

  constructor(private service : DogsitterService, private dr : MatDialogRef<AddDogsitterComponent>, private sb : MatSnackBar, private router : Router) { }

  regions = [
    "Ben_Arous", "Ariana", "Tunis", "Nabeul", "Mannouba", "Bizerte", "Béja", "Jendouba", "Zaghouan", "Siliana", "Le_Kef", "Sousse", "Monastir",
    "Mahdia", "Kasserine", "Sidi_Bouzid", "Kairouan", "Gafsa", "Sfax", "Gabés", "Médenine", "Tozeur", "Kebili", "Tataouine"
  ]

  form!: FormGroup;

  selecetdFile!: File;

  imagePreview: any;

  

  ngOnInit(): void {
    if(localStorage.getItem('admin') != 'true'){
      this.router.navigateByUrl('home')
    }
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
      //console.log(this.imagePreview)
    };
    reader.readAsDataURL(this.selecetdFile);
  }

  submit() {
    //console.log(this.form.value);
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
      // console.log(fd.get('image'))
      // console.log(fd.get('nom'))
      // console.log(fd.get('prenom'))
      this.service.addDogsitter(fd).subscribe(() => {
        this.dr.close();
        this.sb.open('Dog Sitter Ajouté avec Succées','Ok', {
          duration : 3000
        })
      })
    }
  }

}
