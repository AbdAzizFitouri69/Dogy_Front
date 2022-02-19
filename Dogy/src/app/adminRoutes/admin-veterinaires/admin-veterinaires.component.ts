import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { Veterinaire } from 'src/app/models/Veterinaire';
import { VeterinairesServiceService } from 'src/app/services/Admin-Services/Veterinaires/veterinaires-service.service';
import { AddVeterinaireComponent } from './add-veterinaire/add-veterinaire.component';
import { UpdateVeterinaireComponent } from './update-veterinaire/update-veterinaire.component';

@Component({
  selector: 'app-admin-veterinaires',
  templateUrl: './admin-veterinaires.component.html',
  styleUrls: ['./admin-veterinaires.component.css']
})
export class AdminVeterinairesComponent implements OnInit {

  constructor(private dialog: MatDialog, private vetService: VeterinairesServiceService, private _sanitizer: DomSanitizer) { }

  imagePath : any

  vets: any = [];

  progress = 0;


  ngOnInit(): void {
    this.fillTable();
  }

  openAddDialog() {
    this.dialog.open(AddVeterinaireComponent).afterClosed().subscribe(()=>{
      this.fillTable();
    })
  }

  openUpdateDialog(vet : Veterinaire){
    this.dialog.open(UpdateVeterinaireComponent,
        { data : {
          data : vet
        }}
      ).afterClosed().subscribe(()=>{
      this.fillTable();
    })
  }

  convert(base64String){
    return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + base64String)
  }

  fillTable() {
    this.vetService.getAllVeterinaires().subscribe(res => {
      this.vets = res;
      console.log(res)
    })
  }

  holdHandler(e: any){
    console.log(e);

  }

  confirmDelete(e: any,vet: Veterinaire){
    this.progress = e / 10;
    if (this.progress > 250) {
      console.log("DELETED : " + vet.nom);
      this.fillTable();
    }
  }
  
  imageBlobUrl: any

  createImageFromBlob(img){
    let reader = new FileReader();
    let imageBlobUrl;
    reader.addEventListener("load", () => {
      imageBlobUrl = reader.result;
    }, false);
    if(img){
      reader.readAsDataURL(img);
    }
    return imageBlobUrl;
  }



}
