import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DogwalkerService } from 'src/app/services/Admin-Services/Dogwalkers/dogwalker.service';
import { AddDogwalkerComponent } from './add-dogwalker/add-dogwalker.component';

@Component({
  selector: 'app-admin-dogwalkers',
  templateUrl: './admin-dogwalkers.component.html',
  styleUrls: ['./admin-dogwalkers.component.css']
})
export class AdminDogwalkersComponent implements OnInit {

  constructor(private dialog : MatDialog, private service : DogwalkerService) { }

  dogwalkers :any = [];
  
  ngOnInit(): void {
    this.fillTable();
  }

  openAddDialog(){
    this.dialog.open(AddDogwalkerComponent).afterClosed().subscribe(()=>{
      this.fillTable();
    })
  }

  fillTable(){
    this.service.getAllDogwalkers().subscribe(res => {
      this.dogwalkers = res;
    })
  }

}
