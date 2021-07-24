import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
baseUrl= environment.baseUrl
  constructor(private httpClient: HttpClient) { }

  getAllArticles(): Observable<any[]> {
    return this.httpClient.get<any []>(`${this.baseUrl}/articles`);
  }

  deleteArticle(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/articles/${id}`);
  }

  saveUpdate(id: number, formValue: any) {
    return this.httpClient.put(`${this.baseUrl}/articles/${id}`,formValue);
  }

  getAricleById(id: number) {
    return this.httpClient.get(`${this.baseUrl}/articles/${id}`);
  }
  
  addArticle(formValue: any) {
  return this.httpClient.post(`${this.baseUrl}/articles`,formValue);
  }
}
