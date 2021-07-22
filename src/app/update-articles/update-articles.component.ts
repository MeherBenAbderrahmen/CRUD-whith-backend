import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';
@Component({
  selector: 'app-update-articles',
  templateUrl: './update-articles.component.html',
  styleUrls: ['./update-articles.component.css']
})
export class UpdateArticlesComponent implements OnInit {
  index: any;
  submitted=false;
  users = JSON.parse(localStorage.getItem('registration') || '[]');
  articleForm=new FormGroup({
    nomArticle: new FormControl('',Validators.required),
    quantiteArticle: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required]),
    prix: new FormControl('',[Validators.required])
  })
  constructor(private ArticleService: ServicesService, private activatetRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.index = this.activatetRoute.snapshot.params.index;
    this.articleForm.patchValue(this.users[this.index])
  }
  updateArticle(){
    this.submitted=true;
    if (this.articleForm.invalid)
    {return};
    //update using service
    this.ArticleService.getAricleByIndex(this.index);
    this.ArticleService.saveUpdate(this.index, this.articleForm.value);
    this.router.navigateByUrl('/article')
    /*this.users.splice(this.index, 1, this.articleForm.value);
    localStorage.setItem('registration', JSON.stringify(this.users));
    this.router.navigateByUrl('/article');*/
 
  }

}
