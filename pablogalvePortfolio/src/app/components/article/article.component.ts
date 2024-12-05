import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Article } from './Article';
import { ArticleService } from '../../services/article/article.service';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  constructor( private articleService : ArticleService){}
  articles : Article[] = [];
  ngOnInit(){
    this.getArticles();
  }
  getArticles(){
    this.articles = this.articleService.getArticles();
  }
  formatTech( techArray : string[]) : string{
    let l = techArray.length;
    let res : string = "";
    res += techArray[0];
    if(l != 1){
      for(let i = 1 ; i < l; i++){
        if(l-i === 1){
          res += " and " +techArray[i] + ".";
        }
        else{
          res += ", "+ techArray[i];
        }
      }
    }
    
    return res;
  }
}
