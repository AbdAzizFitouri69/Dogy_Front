import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { ArticlesService } from '../services/Admin-Services/Articles/articles.service';
import { AdminUsersService } from '../services/Admin-Services/Users/admin-users.service';
import { CommentsComponent } from './comments/comments.component';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor(private router : Router, private articleService : ArticlesService , private userService : AdminUsersService, private _sanitizer : DomSanitizer, private dg : MatDialog) { }

  articles
  
  user! : User;

  ngOnInit(): void {
    this.fillArticles();
  }

  fillArticles(){
    this.articleService.getAccepted().subscribe(res => {
      this.articles = res;
    })
  }

  convert(base64String) {
    return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + base64String)
  }

  openComments(article){
    this.dg.open(CommentsComponent, {data : 
      { data : article }
    }).afterClosed().subscribe(()=>{
      this.fillArticles();
    })
  }


}
