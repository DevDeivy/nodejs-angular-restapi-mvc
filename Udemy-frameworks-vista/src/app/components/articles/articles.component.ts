import { Component, inject, Input} from '@angular/core';
import { Article } from '../articles';
import { CommonModule } from '@angular/common';
import { urlApi } from '../../services/urlApi';
import { ArticleService } from '../../services/article.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent {

  @Input() articleGetPadre?: Article[];
  @Input() getImagePadre?: string;
  private deleteArticle = inject(ArticleService);

  ngOnInit(): void {
    this.getImagePadre = urlApi.url;
  }

  delete(id: string){
    this.deleteArticle.DeleteArticle(id).subscribe(data =>{
      window.location.reload();
    }, err => {
      console.log(err, 'error');
    })
  }
}
