import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/models/User';
import { AnnonceService } from 'src/app/services/Admin-Services/Annonces/annonce.service';
import { AdminUsersService } from 'src/app/services/Admin-Services/Users/admin-users.service';

@Component({
  selector: 'app-client-annonces-add',
  templateUrl: './client-annonces-add.component.html',
  styleUrls: ['./client-annonces-add.component.css']
})
export class ClientAnnoncesAddComponent implements OnInit {

  regions = [
    "Ben_Arous", "Ariana", "Tunis", "Nabeul", "Mannouba", "Bizerte", "Béja", "Jendouba", "Zaghouan", "Siliana", "Le_Kef", "Sousse", "Monastir",
    "Mahdia", "Kasserine", "Sidi_Bouzid", "Kairouan", "Gafsa", "Sfax", "Gabés", "Médenine", "Tozeur", "Kebili", "Tataouine"
  ]

  form!: FormGroup;

  selecetdFile!: File;

  imagesList!: File[]

  imagePreview: any;

  vente!: boolean

  accouplement!: boolean

  lost!: boolean

  found!: boolean



  constructor(private service: AnnonceService, private userService: AdminUsersService, private dgRef: MatDialogRef<ClientAnnoncesAddComponent>) { }

  ngOnInit(): void {
    //console.log(localStorage.getItem('email'))
    this.imagesList = [];
    this.accouplement = true
    this.found = false
    this.lost = false
    this.vente = false;
    this.form = new FormGroup({
      image: new FormControl('', [Validators.required]),
      titre: new FormControl('', [Validators.required]),
      race: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      unitAge: new FormControl('Mois', [Validators.required]),
      sexe: new FormControl('', [Validators.required]),
      taille: new FormControl('', [Validators.required]),
      ville: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      dressage: new FormControl(false, [Validators.nullValidator]),
      papiers: new FormControl(false, [Validators.nullValidator]),
      prix: new FormControl(0, [Validators.nullValidator])
    })
  }

  //typeAnnonce;

  onFileUpload(event) {
    this.selecetdFile = event.target.files[0];
    //this.imagesList.push(this.selecetdFile);
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
      //console.log(this.imagePreview)
    };
    reader.readAsDataURL(this.selecetdFile);
  }

  user!: User;

  submit() {
    if (this.form.valid) {
      //console.log(this.form.value)
      const fd = new FormData();
      fd.append('image', this.selecetdFile, this.selecetdFile.name)
      //fd.append('titre', this.form.value.titre)
      fd.append('age', this.form.value.age + " " + this.form.value.unitAge)
      fd.append('sexe', this.form.value.sexe)
      fd.append('taille', this.form.value.taille)
      fd.append('race', this.form.value.race)
      fd.append('ville', this.form.value.ville)
      fd.append('details', this.form.value.description)
      fd.append('dressage', this.form.value.dressage)
      fd.append('papiers', this.form.value.papiers)
      fd.append('prix', this.form.value.prix)
      console.log(fd.get('images'))
      if (this.vente) {
        fd.append('titre', 'Vente: '+this.form.value.titre)
        this.userService.getOneUser(localStorage.getItem('email')).subscribe(res => {
          this.user = res;
          this.service.addVente(fd, this.user.idUser).subscribe(res => {
            this.dgRef.close();
          })
        })
      }
      if (this.accouplement) {
        fd.append('titre', 'Accouplement: '+this.form.value.titre)
        this.userService.getOneUser(localStorage.getItem('email')).subscribe(res => {
          this.user = res;
          this.service.addAccouplement(fd, this.user.idUser).subscribe(res => {
            this.dgRef.close();
          })
        })
      }
      if (this.lost) {
        fd.append('titre', 'Chien Perdu: '+this.form.value.titre)
        this.userService.getOneUser(localStorage.getItem('email')).subscribe(res => {
          this.user = res;
          this.service.addLost(fd, this.user.idUser).subscribe(res => {
            this.dgRef.close();
          })
        })
      }
      if (this.found) {
        fd.append('titre', 'Chien Trouvé: '+this.form.value.titre)
        this.userService.getOneUser(localStorage.getItem('email')).subscribe(res => {
          this.user = res;
          this.service.addFound(fd, this.user.idUser).subscribe(res => {
            this.dgRef.close();
          })
        })
      }
    }
  }

  onSelectChange(type: string) {
    if (type == "Accouplement") {
      this.vente = false;
      this.accouplement = true
      this.lost = false
      this.found = false
      //console.log(this.vente)
    }
    if (type == "Vente") {
      this.vente = true;
      this.accouplement = false
      this.lost = false
      this.found = false
      //console.log(this.vente)
    }
    if (type == "Chien Trouvé") {
      this.vente = false;
      this.accouplement = false
      this.lost = false
      this.found = true
      //console.log(this.vente)
    }
    if (type == "Chien Perdu") {
      this.vente = false;
      this.accouplement = false
      this.lost = true
      this.found = false
      //console.log(this.vente)
    }
  }



}
