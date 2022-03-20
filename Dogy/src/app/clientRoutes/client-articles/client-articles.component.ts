import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { ArticlesService } from 'src/app/services/Admin-Services/Articles/articles.service';
import { AdminUsersService } from 'src/app/services/Admin-Services/Users/admin-users.service';
import { ClientArticleAddComponent } from './client-article-add/client-article-add.component';
import { SafeHtmlPipe } from './SafeHtmlPipe';

@Component({
  selector: 'app-client-articles',
  templateUrl: './client-articles.component.html',
  styleUrls: ['./client-articles.component.css']
})
export class ClientArticlesComponent implements OnInit {

  constructor(private dialog : MatDialog ,private router : Router, private articleService : ArticlesService , private userService : AdminUsersService, private _sanitizer : DomSanitizer) { }

  articles;

  user! : User;

  ngOnInit(): void {
    if(localStorage.getItem('connected') != 'true'){
      this.router.navigateByUrl('home');
    }
    this.fillArticles();

  }

  fillArticles(){
    this.userService.getOneUser(localStorage.getItem('email')).subscribe(res=> {
      this.user = res;
      this.articleService.getUserArticles(this.user.idUser).subscribe(res => {
        this.articles = res;
        this.articles = this.articles.sort((a,b) => {
          (a.dateAjout > b.dateAjout ? 1 : -1)
        })
      })
    })
    
  }

  convert(base64String) {
    return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + base64String)
  }

  

  openDialog(){
    this.dialog.open(ClientArticleAddComponent).afterClosed().subscribe(()=> {
      this.fillArticles()
    })
  }



}
