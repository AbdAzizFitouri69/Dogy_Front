import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArticlesService } from 'src/app/services/Admin-Services/Articles/articles.service';
import { AdminUsersService } from 'src/app/services/Admin-Services/Users/admin-users.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA)public data : any, private articleService : ArticlesService, private userService : AdminUsersService) { }

  form! : FormGroup;

  comments;
  
  ngOnInit(): void {
    this.form = new FormGroup({
      content : new FormControl('',[Validators.required])
    })
    this.fillComments();
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
        })
      })
    }
  }

}
