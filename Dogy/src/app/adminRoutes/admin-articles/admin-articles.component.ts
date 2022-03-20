import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ArticlesService } from 'src/app/services/Admin-Services/Articles/articles.service';

@Component({
  selector: 'app-admin-articles',
  templateUrl: './admin-articles.component.html',
  styleUrls: ['./admin-articles.component.css']
})
export class AdminArticlesComponent implements OnInit {

  constructor(private articleService : ArticlesService, private _sanitizer : DomSanitizer) { }

  articles;
  
  ngOnInit(): void {
    this.fillArticles();
  }

  fillArticles(){
    this.articleService.getPending().subscribe(res => {
      this.articles = res
    })
  }

  convert(base64String) {
    return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + base64String)
  }

  acceptArticle(idArticle){
    this.articleService.accept(idArticle).subscribe(()=>{
      this.fillArticles();
    })
  }

  refuseArticle(idArticle){
    this.articleService.refuse(idArticle).subscribe(()=> {
      this.fillArticles();
    })
  }

}
