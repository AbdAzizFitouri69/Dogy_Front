import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/models/User';
import { AdminUsersService } from 'src/app/services/Admin-Services/Users/admin-users.service';
import { SignUp } from '../login.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form!: FormGroup;

  user!: User;

  regions = [
    "Ben_Arous", "Ariana", "Tunis", "Nabeul", "Mannouba", "Bizerte", "Béja", "Jendouba", "Zaghouan", "Siliana", "Le_Kef", "Sousse", "Monastir",
    "Mahdia", "Kasserine", "Sidi_Bouzid", "Kairouan", "Gafsa", "Sfax", "Gabés", "Médenine", "Tozeur", "Kebili", "Tataouine"
  ]


  constructor(private service: AdminUsersService, private dg: MatDialogRef<SignUp>, private sb : MatSnackBar) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      ville: new FormControl('', [Validators.required]),
      sexe: new FormControl('', [Validators.required])
    })

  }

  foundUser!: User;

  submit() {
    if (this.form.valid) {
      this.service.getOneUser(this.form.value.email).subscribe(res => {
        this.foundUser = res;
        if (this.foundUser == null) {
          this.user = new User();
          this.user.email = this.form.value.email
          this.user.nom = this.form.value.nom
          this.user.prenom = this.form.value.prenom
          this.user.password = this.form.value.password
          this.user.ville = this.form.value.ville
          this.user.sexe = this.form.value.sexe
          this.service.addUser(this.user).subscribe(res => {
            localStorage.setItem('email', res.email);
            localStorage.setItem('connected', 'true');
            localStorage.setItem('Admin', 'false');
            window.location.reload();
          })
        } else {
          this.sb.open("Cet Email est déja utilisé", "Ok");
        }
      })
    }
  }

}
