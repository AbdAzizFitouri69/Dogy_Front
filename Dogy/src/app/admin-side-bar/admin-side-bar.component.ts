import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fadeAnimation } from '../animations';


@Component({
  selector: 'app-admin-side-bar',
  templateUrl: './admin-side-bar.component.html',
  styleUrls: ['./admin-side-bar.component.css'],
  animations: [fadeAnimation]
})
export class AdminSideBarComponent implements OnInit {

  showFiller = false;

  constructor(private router: Router) { }




  dress = this.router.url == "a_dress"
  vets = this.router.url == "a_vets"
  dws = this.router.url == "a_dws"

  ngOnInit(): void {
    
  }

  isExpanded = true;
  state = 'collapsed';

  toggleSidenav() {
    this.isExpanded = !this.isExpanded;
    if (this.state == 'collapsed') {
      this.state = 'hidden'
    } else {
      this.state = 'collapsed'
    }
  }

  

}
