import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArticlesComponent } from './add-articles/add-articles.component';
import { UpdateArticlesComponent } from './update-articles/update-articles.component';
import { ArticlesComponent } from './articles/articles.component';
const routes: Routes = [

  {path: '', redirectTo: '/article', pathMatch: 'full',},
 
  {path: 'addArticle', component:AddArticlesComponent},
  {path: 'updateArticle/:index', component:UpdateArticlesComponent},
  {path: 'article', component:ArticlesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
