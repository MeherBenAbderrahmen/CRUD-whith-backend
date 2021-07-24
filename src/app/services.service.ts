import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private httpClient: HttpClient) { }

  getAllArticles(): Observable<any[]> {
    return this.httpClient.get<any []>('http://localhost:3000/articles');
  }

  deleteArticle(id: number) {
    return this.httpClient.delete('http://localhost:3000/articles/'+id);
  }

  saveUpdate(id: number, formValue: any) {
    return this.httpClient.put('http://localhost:3000/articles/'+id,formValue);
  }

  getAricleById(id: number) {
    return this.httpClient.get('http://localhost:3000/articles/'+id);
  }
  
  addArticle(formValue: any) {
  return this.httpClient.post('http://localhost:3000/articles',formValue);
  }
}
