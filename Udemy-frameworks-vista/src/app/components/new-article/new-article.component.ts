import { Component, inject } from '@angular/core';
import { SliderComponent } from "../utilies/slider/slider.component";
import { SidebarComponent } from "../utilies/sidebar/sidebar.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Article } from '../articles';
import { ArticleService } from '../../services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-article',
  standalone: true,
  imports: [SliderComponent, SidebarComponent,CommonModule,FormsModule],
  templateUrl: './new-article.component.html',
  styleUrl: './new-article.component.css'
})
export class NewArticleComponent {

  public articles: Article;
  private saveArticle = inject(ArticleService); 

  constructor(private _router: Router) {
    this.articles = new Article('', '', '', null, null);
  }

  onSubmit(){ 
    this.saveArticle.CreateArticle(this.articles).subscribe(data => {
      this.articles = data.article;
      this._router.navigate(['/blog']);
    }, err =>{
      console.log(err, 'error');
    });
  }
}
