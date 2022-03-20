import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-details-dresseur',
  templateUrl: './details-dresseur.component.html',
  styleUrls: ['./details-dresseur.component.css']
})
export class DetailsDresseurComponent implements OnInit {

  constructor(private _sanitizer : DomSanitizer, @Inject(MAT_DIALOG_DATA) public data : any ) { }

  dresseur! : any

  ngOnInit(): void {
    this.dresseur = this.data['data']
  }

  convert(base64String) {
    return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + base64String)
  }

  replace(str: string): string {
    str = str.replace('_', ' ');
    return str;
  }

  replaceMonths(str: string | null){
    if (str) {
      str = str.replace('January', 'Janvier')
      str = str.replace('February', 'Février')
      str = str.replace('March', 'Mars')
      str = str.replace('April', 'Avril')
      str = str.replace('Mai', 'May')
      str = str.replace('June', 'Juin')
      str = str.replace('July', 'Juillet')
      str = str.replace('August', 'Aout')
      str = str.replace('September', 'Septembre')
      str = str.replace('October', 'Octobre')
      str = str.replace('November', 'Novembre')
      str = str.replace('December', 'Décembre')
    }
    return str;
  }

}
