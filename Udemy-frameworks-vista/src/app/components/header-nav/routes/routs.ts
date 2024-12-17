import { Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { BlogComponent } from "../blog/blog.component";
import { formularioComponent } from "../formulario/pagina1.component";
import { peliculasComponent } from "../peliculas/peliculas.component";
import { PaginaComponent } from "../pagina/pagina.component";
import { SearchArticlesComponent } from "../../search-articles/search-articles.component";
import { NewArticleComponent } from "../../new-article/new-article.component";

export const routs: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'blog', component: BlogComponent },
    {path: 'search/:search', component: SearchArticlesComponent}, 
    {path: 'blog/crear', component: NewArticleComponent}, 
    { path: 'formulario', component: formularioComponent },
    { path: 'peliculas', component: peliculasComponent },
    { path: 'pagina', component: PaginaComponent },
    { path: 'pagina/:nombre', component: PaginaComponent },
    { path: '**', redirectTo: '/home' }
]