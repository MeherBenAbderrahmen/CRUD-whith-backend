import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }
  getAllArticles() {
    return JSON.parse(localStorage.getItem('registration') || '[]');
  }
  deleteArticle(index: number) {
    const registartions = this.getAllArticles();
    registartions.splice(index, 1);
    localStorage.setItem('registration', JSON.stringify(registartions));

  }
  saveUpdate(index: number, formValue: any) {
    let artcicleData = this.getAllArticles();
    artcicleData.splice(index, 1, formValue);
    localStorage.setItem('registration', JSON.stringify(artcicleData))
  }
  getAricleByIndex(index: number) {
    const registartions = this.getAllArticles();
    return (registartions[index])
  }
  addArticle(formValue: any) {
    const registartions = JSON.parse(localStorage.getItem('registration') || '[]');
    registartions.push(formValue);
    localStorage.setItem('registration', JSON.stringify(registartions));
  }
}
