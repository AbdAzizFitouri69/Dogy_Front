import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Dresseur } from 'src/app/models/Dresseur';
import { AdminDresseurService } from 'src/app/services/Admin-Services/Dresseurs/admin-dresseur.service';
import { SnackAdd } from 'src/app/snackbar/snackbar';

@Component({
  selector: 'app-add-dresseur',
  templateUrl: './add-dresseur.component.html',
  styleUrls: ['./add-dresseur.component.css']
})
export class AddDresseurComponent implements OnInit {

  form! : FormGroup

  dresseur! : Dresseur

  selecetdFile!: File;

  imagePreview: any;

  constructor(private service : AdminDresseurService , private dg : MatDialogRef<AddDresseurComponent>, private sb : MatSnackBar) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nom : new FormControl('',[Validators.required]),
      prenom : new FormControl('',[Validators.required]),
      sexe : new FormControl('',[Validators.required]),
      naiss : new FormControl('',[Validators.required]),
      email : new FormControl('',[Validators.required]),
      ville : new FormControl('',[Validators.required]),
      desc : new FormControl('',[Validators.required]),
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
    //console.log("Entered")
    // this.vt = new Veterinaire();
    if (this.form.valid) {
      //console.log("VALID")
      //this.date = new Date(this.form.value.naiss)
      fd.append('image', this.selecetdFile, this.selecetdFile.name)
      fd.append('nom', this.form.value.nom)
      fd.append('prenom', this.form.value.prenom)
      fd.append('dateNaissance', this.form.value.naiss)
      fd.append('ville' , this.form.value.ville)
      fd.append('sexe', this.form.value.sexe)
      fd.append('email', this.form.value.email)
      //console.log(fd.get('image'))
      //console.log(fd.get('nom'))
      //console.log(fd.get('prenom'))
      this.service.addDresseur(fd).subscribe(() => {
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

}
