import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AdminUsersService } from 'src/app/services/Admin-Services/Users/admin-users.service';

@Component({
  selector: 'app-blacklist',
  templateUrl: './blacklist.component.html',
  styleUrls: ['./blacklist.component.css']
})
export class BlacklistComponent implements OnInit {

  constructor(private service : AdminUsersService, private dgr : MatDialogRef<BlacklistComponent>) { }

  blackList : any = []

  ngOnInit(): void {
    this.fillTable()
  }

  fillTable(){
    this.service.getBlacklist().subscribe(res => {
      this.blackList = res;
    })
  }


  closeDialog(){
    this.dgr.close();
  }


  

}
