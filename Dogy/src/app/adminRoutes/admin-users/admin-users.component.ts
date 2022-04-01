import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AdminUsersService } from 'src/app/services/Admin-Services/Users/admin-users.service';
import { BlacklistComponent } from './Blacklist/blacklist/blacklist.component';
import { ReasonComponent } from './reason/reason.component';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  constructor(private service : AdminUsersService, private dg : MatDialog , private router : Router) { }

  progress = 0;

  users : any = []


  ngOnInit(): void {
    if(localStorage.getItem('admin') != 'true'){
      this.router.navigateByUrl('home')
    }
    this.fillTable();
  }

  fillTable(){
    this.service.getAllUsers().subscribe(res => {
      this.users = res;
    })
  }

  holdHandler(e: any){
    //console.log(e);

  }

  confirmDelete(e: any,user: User){
    this.progress = e / 10;
    if (this.progress > 250) {
      //console.log(user)
      this.dg.open(ReasonComponent, {
        data : {
          user : user
        }
      }).afterClosed().subscribe(()=>{
        this.fillTable();
      })
    }
  }

  openBlacklist(){
    this.dg.open(BlacklistComponent);
  }

}
