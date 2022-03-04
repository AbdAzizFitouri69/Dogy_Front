import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  ngOnInit(): void {
    this.admin = localStorage.getItem('Admin');
    this.user = localStorage.getItem('User');
  }
  

  admin;

  user;

  visitor = 'true';

  title = 'Dogy';


}
