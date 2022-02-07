import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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

  constructor(private dialog: MatDialog, private vetService: VeterinairesServiceService) { }

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

  fillTable() {
    this.vetService.getAllVeterinaires().subscribe(res => {
      this.vets = res;
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

}
