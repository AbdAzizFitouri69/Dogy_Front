import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Veterinaire } from 'src/app/models/Veterinaire';

@Injectable({
  providedIn: 'root'
})
export class VeterinairesServiceService {

  constructor(private http : HttpClient) { }

  private prefix : string = "http://127.0.0.1:8089/Dogy/personnels";


  getAllVeterinaires() : Observable<any>{
    return this.http.get(this.prefix+"/veterinaires");
  }

  addVeterinaire(fd: FormData) : Observable<any>{
    return this.http.post(this.prefix+"/veterinaire/add",fd);
  }

  updateVeterinaire(vt : Veterinaire) : Observable<any>{
    return this.http.put(this.prefix+"/veterinaires/update",vt);
  }





}
