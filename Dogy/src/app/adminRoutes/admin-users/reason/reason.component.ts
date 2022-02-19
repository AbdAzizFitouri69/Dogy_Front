import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/User';
import { AdminUsersService } from 'src/app/services/Admin-Services/Users/admin-users.service';

@Component({
  selector: 'app-reason',
  templateUrl: './reason.component.html',
  styleUrls: ['./reason.component.css']
})
export class ReasonComponent implements OnInit {

  constructor(private service : AdminUsersService , private dgr : MatDialogRef<ReasonComponent>, @Inject(MAT_DIALOG_DATA) private data : any) { }

  form! : FormGroup

  user! : User

  ngOnInit(): void {
    this.form = new FormGroup({
      reason : new FormControl('',[Validators.required])
    })
  }

  closeDilaog(){
    this.dgr.close();
  }

  submit(){
    this.service.addToBlacklist(this.data['user'],this.form.value.reason).subscribe(()=>{
      this.closeDilaog();
    })
  }

}
