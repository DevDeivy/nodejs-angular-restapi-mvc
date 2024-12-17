import { Component, inject } from '@angular/core';
import { SliderComponent } from "../../utilies/slider/slider.component";
import { SidebarComponent } from "../../utilies/sidebar/sidebar.component";
import { ArticleService } from '../../../services/article.service';
import { Article } from '../../articles';
import { CommonModule } from '@angular/common';
import { urlApi } from '../../../services/urlApi';
import { app } from '../../../../../server';
import { ArticlesComponent } from '../../articles/articles.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [SliderComponent, SidebarComponent, CommonModule,ArticlesComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

  public articleGet: Article[] = [];
  public getImage?: string;

  private _articleService = inject(ArticleService);
    
  constructor() {}
  ngOnInit(): void {
    this._articleService.getArticles().subscribe(resp => {
      if (resp.articleGet) {
        this.articleGet = resp.articleGet;
      } else {
        console.error('No se encontraron artículos.');
      }
    }, err => {
      console.log('Error al obtener artículos:', err);
    });
  }
}
