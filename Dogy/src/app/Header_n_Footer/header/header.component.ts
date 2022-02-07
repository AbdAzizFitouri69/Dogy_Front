import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dialog : MatDialog , private router: Router) { }

  ngOnInit(): void {
  }

  homeActive = this.router.url === "/home"
  annonceActive = this.router.url === "/annonces"
  vetsActive = this.router.url === "/vets"

  openDialog() {
    this.dialog.open(LoginDialog);
  }

  annonces(){
    this.router.navigate(['/annonces']);
  }

}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'login.dialog.html',
})
export class LoginDialog {

  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private dialog : MatDialogRef<LoginDialog>) { }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? "Ce n'est pas un Email Valide" : '';
  }

  closeDialog(){
    this.dialog.close();
  }

  



}

