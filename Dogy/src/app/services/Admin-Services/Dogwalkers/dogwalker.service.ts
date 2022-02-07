import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dogwalker } from 'src/app/models/Dogwalker';

@Injectable({
  providedIn: 'root'
})
export class DogwalkerService {

  constructor(private http : HttpClient) { }

  private prefix : string = "http://127.0.0.1:8089/Dogy/personnels";

  getAllDogwalkers() : Observable<any>{
    return this.http.get(this.prefix+"/dogwalkers");
  }

  addDogwalker(dw : Dogwalker) : Observable<any>{
    return this.http.post(this.prefix+"/dogwalkers/add",dw);
  }

}
