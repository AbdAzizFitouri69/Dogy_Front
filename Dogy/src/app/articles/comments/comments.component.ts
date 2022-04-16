import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { ArticlesService } from 'src/app/services/Admin-Services/Articles/articles.service';
import { AdminUsersService } from 'src/app/services/Admin-Services/Users/admin-users.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css',
  '../assets/plugins/css/plugins.css',
  '../assets/css/style.css',
  '../assets/css/responsiveness.css'
]
})
export class CommentsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA)public data : any,
   private articleService : ArticlesService, 
   private userService : AdminUsersService,
   private _sanitizer : DomSanitizer
   ) { }

  form! : FormGroup;

  article : any;

  comments;
  
  ngOnInit(): void {
    this.article = this.data['data']
    this.form = new FormGroup({
      content : new FormControl('',[Validators.required])
    })
    this.fillComments();
  }

  convert(base64String) {
    return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + base64String)
  }

  fillComments(){
    this.articleService.getArticleComments(this.data['data'].idArticle).subscribe(res => {
      this.comments = res;
    })
  }

  submit(){
    if(this.form.valid){
      const fd = new FormData();
      fd.append('content', this.form.value.content)
      this.userService.getOneUser(localStorage.getItem('email')).subscribe(res =>{
        this.articleService.postComment(fd,res.idUser,this.data['data'].idArticle).subscribe(()=>{
          this.fillComments();
          (<HTMLInputElement>document.getElementById("comment")).value = "";
        })
      })
    }
  }

}
