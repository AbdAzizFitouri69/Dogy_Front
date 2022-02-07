import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../animations';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.css'],
  animations: [fadeAnimation]
})
export class ClientHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
