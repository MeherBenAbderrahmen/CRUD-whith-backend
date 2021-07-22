import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  //users = JSON.parse(localStorage.getItem('registration') || '[]');

  constructor(private ArticleService: ServicesService) { }
  registartions = this.ArticleService.getAllArticles();
  ngOnInit(): void {
  }

  supprimerArticle(nb: any) {
    //delete using services
    this.ArticleService.deleteArticle(nb);
    this.ArticleService.getAllArticles();
    /*
    this.users.splice(nb,1);
    localStorage.setItem('registration', JSON.stringify(this.users));
  */
  }
}
