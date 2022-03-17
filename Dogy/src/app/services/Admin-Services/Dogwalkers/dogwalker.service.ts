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

  addDogwalker(fd : FormData) : Observable<any>{
    return this.http.post(this.prefix+"/dogwalkers/add",fd);
  }

  searchDresseur(str : String) : Observable<any>{
    return this.http.get(this.prefix+"/dogwalkers/"+str);
  }

  searchDresseurByRegion(str : String) : Observable<any>{
    return this.http.get(this.prefix+"/dogwalkers/region/"+str);
  }

  updateDogWalker(fd : FormData) : Observable<any>{
    return this.http.put(this.prefix+"/dogwalkers/update",fd);
  }

  getDogwalkerFiableRatings(idDogwalker) : Observable<any>{
    return this.http.get(this.prefix+"/dogwalkers/ratings/fiable/"+idDogwalker);
  }

  getDogwalkerNonFiableRatings(idDogwalker) : Observable<any>{
    return this.http.get(this.prefix+"/dogwalkers/ratings/non_fiable/"+idDogwalker);
  }

  getDogwalkerCurrentUserRating(idDogwalker,idUser) : Observable<any>{
    return this.http.get(this.prefix+"/dogwalkers/ratings/"+idDogwalker+"/"+idUser);
  }

  addFiable(idDogwalker,idUser) : Observable<any>{
    return this.http.post(this.prefix+"/dogwalkers/ratings/add_fiable/"+idDogwalker+"/"+idUser,null);
  }

  addNonFiable(idDogwalker,idUser) : Observable<any>{
    return this.http.post(this.prefix+"/dogwalkers/ratings/add_non_fiable/"+idDogwalker+"/"+idUser,null);
  }

  getNumFiable(idDogwalker) : Observable<any>{
    return this.http.get(this.prefix+"/dogwalkers/ratings/get_num_fiable/"+idDogwalker);
  }



}
