import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Dogwalker } from 'src/app/models/Dogwalker';
import { DogwalkerService } from 'src/app/services/Admin-Services/Dogwalkers/dogwalker.service';
import { AddDogwalkerComponent } from './add-dogwalker/add-dogwalker.component';
import { UpdateDogwalkerComponent } from './update-dogwalker/update-dogwalker.component';

@Component({
  selector: 'app-admin-dogwalkers',
  templateUrl: './admin-dogwalkers.component.html',
  styleUrls: ['./admin-dogwalkers.component.css']
})
export class AdminDogwalkersComponent implements OnInit {

  constructor(private dialog : MatDialog, private service : DogwalkerService , private _sanitizer : DomSanitizer, private router : Router) { }

  dogwalkers :any = [];
  
  ngOnInit(): void {
    if(localStorage.getItem('admin') != 'true'){
      this.router.navigateByUrl('home')
    }
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

  openUpdateDialog(dw : Dogwalker){
    this.dialog.open(UpdateDogwalkerComponent,
        { data : {
          data : dw
        }}
      ).afterClosed().subscribe(()=>{
      this.fillTable();
    })
  }

  convert(base64String){
    return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + base64String)
  }

}
