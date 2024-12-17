import { Component, inject } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SliderComponent } from "../utilies/slider/slider.component";
import { SidebarComponent } from "../utilies/sidebar/sidebar.component";
import { Article } from '../articles';
import { urlApi } from '../../services/urlApi';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from '../articles/articles.component';

@Component({
  selector: 'app-search-articles',
  standalone: true,
  imports: [SliderComponent, SidebarComponent, CommonModule,ArticlesComponent],
  templateUrl: './search-articles.component.html',
  styleUrl: './search-articles.component.css'
})
export class SearchArticlesComponent {

  public articles: Article[]= [];
  
  private _articleService = inject(ArticleService);

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(res =>{
      const search = res['search'];
      this._articleService.search(search).subscribe(res =>{
        if(res){
          this.articles = res.articles;
        }
      })
    }, err=>{
      this.router.navigate(['/home']);
    })
  }
}