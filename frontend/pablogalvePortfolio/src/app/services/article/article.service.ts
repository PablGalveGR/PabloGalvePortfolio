import { Injectable } from '@angular/core';
import { articles } from '../../components/article/articles';
import { Article } from '../../components/article/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  
  constructor() { }
  getArticles() : Article[]{
    const articles_ : Article[] = articles;
    return articles_;

  }
  getArticle(id:number) : Article{
    let article : Article = articles.find(a => a.id === id)!;
    return article;
  }
}
