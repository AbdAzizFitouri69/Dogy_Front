import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminUsersService } from 'src/app/services/Admin-Services/Users/admin-users.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

  constructor(private sb: MatSnackBar, private userService : AdminUsersService) { }

  ngOnInit(): void {
  }

  vc;

  submit(){
    this.vc = (<HTMLInputElement>document.getElementById("verifCode")).value;
    this.userService.getOneUser(localStorage.getItem('email')).subscribe(res => {
      this.userService.checkVerifCode(res.idUser,this.vc).subscribe(res => {
        if(res == true){
          this.sb.open("Bienvenue")
          localStorage.setItem('connected','true');
          localStorage.setItem('Admin', 'false');
          window.location.reload();
        }else{
          this.sb.open("Code Incorrecte","Compris");
        }
      })
    })
  }

}
