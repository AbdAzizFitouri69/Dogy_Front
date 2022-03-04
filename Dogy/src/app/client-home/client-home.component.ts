import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { fadeAnimation } from '../animations';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.css'],
  animations: [fadeAnimation]
})
export class ClientHomeComponent implements OnInit {

  constructor(private dg : MatDialog) { }

  ngOnInit(): void {
  }

  
  

}
