import { Component, inject } from '@angular/core';
import { SliderComponent } from "../../utilies/slider/slider.component";
import { SidebarComponent } from "../../utilies/sidebar/sidebar.component";
import { ArticleService } from '../../../services/article.service';
import { urlApi } from '../../../services/urlApi';
import { Article } from '../../articles';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent, SidebarComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  api: string; 
  articles: Article[] = [];
  private articleService = inject(ArticleService);

  constructor(){
    this.api = urlApi.url;
  }

  ngOnInit(): void {
    this.articleService.lastArticles().subscribe(res =>{
      if(res.articleGet){
        this.articles = res.articleGet;
      }
    }, err =>{
      console.log('Error al obtener artículos:', err);
    })
  }
}
