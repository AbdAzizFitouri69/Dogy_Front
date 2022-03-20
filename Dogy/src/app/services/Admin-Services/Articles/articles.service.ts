import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http : HttpClient) { }

  private prefix : string = "http://127.0.0.1:8089/Dogy/articles"

  getAllArticles() : Observable<any>{
    return this.http.get(this.prefix+"/")
  }

  getUserArticles(id: Number) : Observable<any>{
    return this.http.get(this.prefix+"/"+id);
  }

  getAccepted() : Observable<any>{
    return this.http.get(this.prefix+"/accepted")
  }

  getPending() : Observable<any>{
    return this.http.get(this.prefix+"/pending")
  }

  accept(id) : Observable<any>{
    return this.http.put(this.prefix+"/accept/"+id,null)
  }

  refuse(id) : Observable<any>{
    return this.http.put(this.prefix+"/refuse/"+id,null)
  }

  addArticle(fd : FormData, idUser) : Observable<any>{
    return this.http.post(this.prefix+"/add",fd);
  }

  getArticleComments(idArticle) : Observable<any>{
    return this.http.get(this.prefix+"/getComments/"+idArticle);
  }

  postComment(fd : FormData, idUser, idArticle) : Observable<any>{
    return this.http.put(this.prefix+"/addComment/"+idArticle+"/"+idUser,fd);
  }

}
