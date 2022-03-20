import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { User } from '../models/User';
import { AdminUsersService } from '../services/Admin-Services/Users/admin-users.service';
import { SignupComponent } from './signup/signup.component';
import { VerificationComponent } from './signup/verification/verification.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private thisDg: MatDialogRef<LoginComponent>, private service: AdminUsersService, private sb: MatSnackBar, private dg: MatDialogRef<LoginComponent>, private dialog: MatDialog, private socialAuthService: SocialAuthService) { }

  form!: FormGroup;

  user!: User;





  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  connectAsAdmin() {
    localStorage.setItem('Admin', 'True');
    localStorage.setItem('User', 'False');
    this.thisDg.close();
  }


  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(() => {
      this.socialAuthService.authState.subscribe(res => {
        this.service.getOneUser(res.email).subscribe(res => {
          this.user = res;
          if (this.user != null) {
            localStorage.setItem("email", res.email)
            localStorage.setItem("connected", 'true')
            if (this.user.role == "Admin") {
              localStorage.setItem('admin', 'true');
            }
            window.location.reload();
          } else {
            this.sb.open("Pas de Compte associé à cet E-Mail", "Compris")
          }
        })
      })
    })
  }

  loginWithFacebook(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(() => {
      this.socialAuthService.authState.subscribe(res => {
        this.service.getOneUser(res.email).subscribe(res => {
          this.user = res;
          if (this.user != null) {
            localStorage.setItem("email", res.email)
            localStorage.setItem("connected", 'true')
            if (this.user.role == "Admin") {
              localStorage.setItem('admin', 'true');
            }
            window.location.reload();
          } else {
            this.sb.open("Pas de Compte associé à cet E-Mail", "Compris")
          }
        })
      })
    })
  }


  submit() {
    if (this.form.valid) {
      this.service.getOneUser(this.form.value.email).subscribe(res => {
        this.user = res;
        console.log(this.user)
        if (this.user != null) {
          if (this.form.value.password === this.user.password) {
            if (res.enabled == true) {
              localStorage.setItem('email', this.user.email);
              localStorage.setItem('connected', 'true');
              if (this.user.role == "Admin") {
                localStorage.setItem('admin', 'true');
              }
              this.dg.close();
              window.location.reload()
              this.sb.open('Bienvenue, ' + this.user.nom.toUpperCase() + ' ' + this.user.prenom, 'Merci');
            } else {
              localStorage.setItem('email', this.user.email);
              this.service.sendVerifCode(this.user.idUser).subscribe(() => {
                this.dg.close();
                this.dialog.open(VerificationComponent);
              })
            }
          } else {
            this.sb.openFromComponent(SnackWrongPassword);
          }
        } else {
          this.sb.openFromComponent(SnackUserNotFound);
        }
      })
    }
  }


  connectAsUser() {
    localStorage.setItem('Admin', 'False');
    localStorage.setItem('User', 'True');
    this.thisDg.close();
  }

  switchToSignUp() {
    this.dg.close();
    this.dialog.open(SignupComponent);
  }



}

@Component({
  selector: 'wrong_pass_snack',
  templateUrl: 'WrongPasswordSnackBar.html'
})
export class SnackWrongPassword { }


@Component({
  selector: 'user_not_found_snack',
  templateUrl: 'UserNotFoundSnackBar.html'
})
export class SnackUserNotFound { }


@Component({
  selector: 'sign_up',
  templateUrl: './signup.html',
})
export class SignUp implements OnInit {

  form!: FormGroup;

  user!: User;




  constructor(private service: AdminUsersService, private dg: MatDialogRef<SignUp>, private sb: MatSnackBar) { }

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
