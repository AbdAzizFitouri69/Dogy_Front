import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminDresseurService } from 'src/app/services/Admin-Services/Dresseurs/admin-dresseur.service';
import { AddDresseurComponent } from './add-dresseur/add-dresseur.component';

@Component({
  selector: 'app-admin-dresseurs',
  templateUrl: './admin-dresseurs.component.html',
  styleUrls: ['./admin-dresseurs.component.css']
})
export class AdminDresseursComponent implements OnInit {

  constructor(private dialog : MatDialog, private service : AdminDresseurService) { }


  dresseurs! : any [];

  ngOnInit(): void {
    this.fillTable();
  }

  openAddDialog(){
    this.dialog.open(AddDresseurComponent).afterClosed().subscribe(()=>{
      this.fillTable();
    })
  }

  fillTable(){
    this.service.getAllDresseurs().subscribe(res => {
      this.dresseurs = res;
    })
  }

}
