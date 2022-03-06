import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class AdminUsersService {

  constructor(private http : HttpClient) { }

  private userPrefix : string = "http://127.0.0.1:8089/Dogy/users"

  private blacklistPrefix : string = "http://127.0.0.1:8089/Dogy/blacklist"

  getAllUsers() : Observable<any> {
    return this.http.get(this.userPrefix+"/");
  }

  getBlacklist() : Observable<any> {
    return this.http.get(this.blacklistPrefix+"/");
  }

  addToBlacklist(user : User, reason : String) {
    return this.http.post(this.userPrefix+"/toBlackList/"+reason, user);
  }

  getOneUser(email) : Observable<any>{
    return this.http.get(this.userPrefix+"/getOne/"+email);
  }

  addUser(user : User) : Observable<any>{
    return this.http.post(this.userPrefix+"/add",user);
  }

}
