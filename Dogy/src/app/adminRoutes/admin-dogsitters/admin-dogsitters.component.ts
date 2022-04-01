import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Dogsitter } from 'src/app/models/Dogsitter';
import { DogsitterService } from 'src/app/services/Admin-Services/Dogsitters/dogsitter.service';
import { AddDogsitterComponent } from './add-dogsitter/add-dogsitter.component';
import { UpdateDogsitterComponent } from './update-dogsitter/update-dogsitter.component';

@Component({
  selector: 'app-admin-dogsitters',
  templateUrl: './admin-dogsitters.component.html',
  styleUrls: ['./admin-dogsitters.component.css']
})
export class AdminDogsittersComponent implements OnInit {

  constructor(private dialog : MatDialog, private service : DogsitterService, private _sanitizer : DomSanitizer, private router : Router) { }

  dogsitters : any = [];

  ngOnInit(): void {
    if(localStorage.getItem('admin') != 'true'){
      this.router.navigateByUrl('home')
    }
    this.fillTable();
  }

  openAddDialog(){
    this.dialog.open(AddDogsitterComponent).afterClosed().subscribe(()=>{
      this.fillTable();
    })
  }

  fillTable(){
    this.service.getAllDogsitters().subscribe(res => {
      this.dogsitters = res;
    })
  }

  openUpdateDialog(ds : Dogsitter){
    this.dialog.open(UpdateDogsitterComponent, 
      {
        data : {
          data : ds
        }
      }).afterClosed().subscribe(()=>{
        this.fillTable();
      })
  }

  convert(base64String){
    return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + base64String);
  }

}
