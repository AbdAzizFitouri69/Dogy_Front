import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dresseur } from 'src/app/models/Dresseur';

@Injectable({
  providedIn: 'root'
})
export class AdminDresseurService {

  constructor(private http : HttpClient) { }

  private prefix : string = "http://127.0.0.1:8089/Dogy/personnels";

  getAllDresseurs() : Observable<any>{
    return this.http.get(this.prefix+"/dresseurs");
  }

  addDresseur(fd : FormData) : Observable<any>{
    return this.http.post(this.prefix+"/dresseurs/add",fd);
  }

  updateDresseur(fd : FormData) : Observable<any>{
    return this.http.put(this.prefix+"/dressuers/update",fd);
  }

  searchDresseur(str : String) : Observable<any>{
    return this.http.get(this.prefix+"/dresseurs/"+str);
  }

  searchDresseurByRegion(str : String) : Observable<any>{
    return this.http.get(this.prefix+"/dresseurs/region/"+str);
  }

}
