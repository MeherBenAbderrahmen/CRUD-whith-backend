import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';
@Component({
  selector: 'app-add-articles',
  templateUrl: './add-articles.component.html',
  styleUrls: ['./add-articles.component.css']
})
export class AddArticlesComponent implements OnInit {
  submitted = false;
  articleForm = new FormGroup({
    nomArticle: new FormControl('', Validators.required),
    quantiteArticle: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    prix: new FormControl('', [Validators.required])


    // email: new FormControl(''),
  })
  //this is a comment

  constructor(private ArticleService: ServicesService, private router: Router) { }

  ngOnInit(): void {
  }
  addArticle() {
    this.submitted = true;
    if (this.articleForm.invalid) { return };
    //Add using service
    this.ArticleService.addArticle(this.articleForm.value);
    /*
     const registartions = JSON.parse(localStorage.getItem('registration') || '[]');
     registartions.push(this.articleForm.value);
     localStorage.setItem('registration', JSON.stringify(registartions));
     */
    this.router.navigate(['/article'])

  }
}