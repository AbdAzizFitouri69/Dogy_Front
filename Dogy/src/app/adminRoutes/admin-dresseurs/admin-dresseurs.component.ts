import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDresseurComponent } from './add-dresseur/add-dresseur.component';

@Component({
  selector: 'app-admin-dresseurs',
  templateUrl: './admin-dresseurs.component.html',
  styleUrls: ['./admin-dresseurs.component.css']
})
export class AdminDresseursComponent implements OnInit {

  constructor(private dialog : MatDialog) { }

  ngOnInit(): void {
  }

  openAddDialog(){
    this.dialog.open(AddDresseurComponent);
  }

}
