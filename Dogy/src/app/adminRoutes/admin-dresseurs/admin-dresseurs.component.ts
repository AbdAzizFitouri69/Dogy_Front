import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Dresseur } from 'src/app/models/Dresseur';
import { DogwalkerService } from 'src/app/services/Admin-Services/Dogwalkers/dogwalker.service';
import { AdminDresseurService } from 'src/app/services/Admin-Services/Dresseurs/admin-dresseur.service';
import { SnackAdd } from 'src/app/snackbar/snackbar';
import { UpdateDogwalkerComponent } from '../admin-dogwalkers/update-dogwalker/update-dogwalker.component';
import { AddDresseurComponent } from './add-dresseur/add-dresseur.component';

@Component({
  selector: 'app-admin-dresseurs',
  templateUrl: './admin-dresseurs.component.html',
  styleUrls: ['./admin-dresseurs.component.css']
})
export class AdminDresseursComponent implements OnInit {

  constructor(private dialog: MatDialog, private service: AdminDresseurService, private _sanitizer: DomSanitizer, private router : Router) { }


  dresseurs!: any[];

  ngOnInit(): void {
    if(localStorage.getItem('admin') != 'true'){
      this.router.navigateByUrl('home')
    }
    this.fillTable();
  }

  openAddDialog() {
    this.dialog.open(AddDresseurComponent).afterClosed().subscribe(() => {
      this.fillTable();
    })
  }

  updateDialog(dresseur: Dresseur) {
    this.dialog.open(UpdateDresseurDialog,
      {
        data: {
          data: dresseur
        }
      }
    ).afterClosed().subscribe(() => {
      this.fillTable();
    })
  }

  fillTable() {
    this.service.getAllDresseurs().subscribe(res => {
      this.dresseurs = res;
    })
  }

  convert(base64String) {
    return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + base64String)
  }

}


@Component({
  selector: 'update-dresseur',
  templateUrl: 'update-dresseur.html',
})
export class UpdateDresseurDialog implements OnInit{

  constructor(public dg: MatDialogRef<UpdateDogwalkerComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private service: AdminDresseurService, private sb: MatSnackBar, private router : Router) { }

  form!: FormGroup;

  drs!: Dresseur;

  selecetdFile!: File;

  imagePreview: any;

  ngOnInit(): void {
    if(localStorage.getItem('admin') != 'true'){
      this.router.navigateByUrl('home')
    }

    console.log(new Date(this.data['data'].dateNaissance))
    this.form = new FormGroup({
      nom: new FormControl(this.data['data'].nom, [Validators.required]),
      prenom: new FormControl(this.data['data'].prenom, [Validators.required]),
      naiss: new FormControl(new Date(this.data['data'].dateNaissance).toISOString(), [Validators.required]),
      sexe: new FormControl(this.data['data'].sexe, [Validators.required]),
      email: new FormControl(this.data['data'].email, [Validators.required]),
      ville: new FormControl(this.data['data'].ville, [Validators.required]),
      description: new FormControl(this.data['data'].description, [Validators.required]),
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
    const fd = new FormData();
    if (this.form.valid) {
      fd.append('id', this.data['data'].id)
      //fd.append('image', this.selecetdFile, this.selecetdFile.name)
      fd.append('nom', this.form.value.nom)
      fd.append('prenom', this.form.value.prenom)
      fd.append('dateNaissance', this.convertDate(this.form.value.naiss))
      fd.append('ville', this.form.value.ville)
      fd.append('sexe', this.form.value.sexe)
      fd.append('email', this.form.value.email)
      fd.append('description', this.form.value.description)
      //console.log(fd.get('image'))
      console.log(fd.get('dateNaissance'))
      //console.log(fd.get('prenom'))
      this.service.updateDresseur(fd).subscribe(() => {
        this.dg.close();
        this.sb.openFromComponent(SnackAdd, {
          duration: 3000
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

