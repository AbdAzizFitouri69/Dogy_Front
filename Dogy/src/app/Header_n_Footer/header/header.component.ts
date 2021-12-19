import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dialog : MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(LoginDialog);
  }

}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'login.dialog.html',
})
export class LoginDialog {



}

