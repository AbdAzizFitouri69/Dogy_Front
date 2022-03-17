import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  constructor(private http : HttpClient) { }

  private prefix : string = "http://127.0.0.1:8089/Dogy/annonces";

  getAllAnnonces() : Observable<any>{
    return this.http.get(this.prefix+"/");
  }

  getUserAnnonces(id : Number) : Observable<any>{
    return this.http.get(this.prefix+"/"+id);
  }

  getAccouplement() : Observable<any>{
    return this.http.get(this.prefix+"/accouplement");
  }

  getAcceptedAccouplemnt() : Observable<any>{
    return this.http.get(this.prefix+"/accouplement/accepted");
  }

  getAcceptedAccouplementCity(city : String) : Observable<any>{
    return this.http.get(this.prefix+"/accouplement/accepted/"+city);
  }

  getAcceptedVente() : Observable<any>{
    return this.http.get(this.prefix+"/vente/accepted");
  }

  getAcceptedVenteCity(city : String) : Observable<any>{
    return this.http.get(this.prefix+"/vente/accepted/"+city);
  }

  getAcceptedLost() : Observable<any>{
    return this.http.get(this.prefix+"/lost/accepted");
  }

  getAcceptedLostCity(city : String) : Observable<any>{
    return this.http.get(this.prefix+"/lost/accepted/"+city);
  }

  getAcceptedFound() : Observable<any>{
    return this.http.get(this.prefix+"/found/accepted");
  }

  getAcceptedFoundCity(city : String) : Observable<any>{
    return this.http.get(this.prefix+"/found/accepted/"+city);
  }

  getVente() : Observable<any>{
    return this.http.get(this.prefix+"/vente");
  }

  getLost() : Observable<any>{
    return this.http.get(this.prefix+"/lost");
  }

  getFound() : Observable<any>{
    return this.http.get(this.prefix+"/found")
  }

  getAccepted() : Observable<any>{
    return this.http.get(this.prefix+"/accepted")
  }

  getAcceptedCity(city : String) : Observable<any>{
    return this.http.get(this.prefix+"/accepted/"+city);
  }

  getPending() : Observable<any> {
    return this.http.get(this.prefix+"/pending");
  }

  addAccouplement(fd : FormData , userId : Number) : Observable<any> {
    return this.http.post(this.prefix+"/accouplement/add/"+userId, fd);
  }

  addVente(fd : FormData , userId : Number) : Observable<any> {
    return this.http.post(this.prefix+"/vente/add/"+userId, fd);
  }

  addLost(fd : FormData , userId : Number) : Observable<any> {
    return this.http.post(this.prefix+"/lost/add/"+userId, fd);
  }

  addFound(fd : FormData , userId : Number) : Observable<any> {
    return this.http.post(this.prefix+"/found/add/"+userId, fd);
  }

  accept(id : Number) : Observable<any>{
    return this.http.put(this.prefix+"/accept/"+id,null);
  }

  refuse(id : Number) : Observable<any>{
    return this.http.put(this.prefix+"/refuse/"+id,null);
  }

  resolve(id : Number) : Observable<any>{
    return this.http.put(this.prefix+"/resolve/"+id,null);
  }

}
