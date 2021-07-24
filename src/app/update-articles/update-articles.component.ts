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
  id: any;
  submitted = false;
  articleForm = new FormGroup({
    nomArticle: new FormControl('', Validators.required),
    quantiteArticle: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    prix: new FormControl('', [Validators.required])
  })
  constructor(private ArticleService: ServicesService, private activatetRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatetRoute.snapshot.params.id;
    this.ArticleService.getAricleById(this.id).subscribe((response) => {
      this.articleForm.patchValue(response);
    }, (error) => {
      console.log(error);
    })
  }

  updateArticle() {
    this.submitted = true;
    if (this.articleForm.invalid) { return };
    //update using service

    this.ArticleService.saveUpdate(this.id, this.articleForm.value).subscribe((response)=>{
      this.router.navigateByUrl('/article')
    },(error)=>{
      console.log(error);
    });
    /*this.users.splice(this.id, 1, this.articleForm.value);
    localStorage.setItem('registration', JSON.stringify(this.users));
    this.router.navigateByUrl('/article');*/

  }

}
