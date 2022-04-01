import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogsitterService {
  updateDogWalker(fd: FormData) {
    throw new Error('Method not implemented.');
  }

  constructor(private http : HttpClient) { }

  private prefix : string = "http://127.0.0.1:8089/Dogy/personnels";

  getAllDogsitters() : Observable<any> {
    return this.http.get(this.prefix+"/dogsitters");
  }

  addDogsitter(fd : FormData) : Observable<any> {
    return this.http.post(this.prefix+"/dogsitters/add",fd);
  }

  searchDogsitter(str : String) : Observable<any> {
    return this.http.get(this.prefix+"/dogsitters/"+str);
  }

  searchDogsitterByRegion(str : String) : Observable<any> {
    return this.http.get(this.prefix+"/dogsitters/region/"+str);
  }

  updateDogsitter(fd : FormData) : Observable<any> {
    return this.http.put(this.prefix+"/dogsitters/update",fd);
  }

  getDogsitterFiableRating(idDogsitter) : Observable<any> {
    return this.http.get(this.prefix+"/dogsitters/ratings/fiable/"+idDogsitter);
  }

  getDogsitterNonFiableRatings(idDogsitter) : Observable<any>{
    return this.http.get(this.prefix+"/dogsitters/ratings/non_fiable/"+idDogsitter);
  }

  getDogsitterCurrentUserRating(idDogsitter, idUser) : Observable<any>{
    return this.http.get(this.prefix+"/dogsitters/ratings/"+idDogsitter+"/"+idUser);
  }

  addFiable(idDogwalker,idUser) : Observable<any>{
    return this.http.post(this.prefix+"/dogsitters/ratings/add_fiable/"+idDogwalker+"/"+idUser,null);
  }

  addNonFiable(idDogwalker,idUser) : Observable<any>{
    return this.http.post(this.prefix+"/dogsitters/ratings/add_non_fiable/"+idDogwalker+"/"+idUser,null);
  }

  getNumFiable(idDogwalker) : Observable<any>{
    return this.http.get(this.prefix+"/dogsitters/ratings/get_num_fiable/"+idDogwalker);
  }

}
