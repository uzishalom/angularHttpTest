import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpTestServiceService {
  readonly url = 'https://jsonplaceholder.typicode.com/posts';

  post = null;

  constructor(public httpTestClient: HttpClient) {
    this.post = httpTestClient.get(this.url);
  }

  getById(id) {
    return this.httpTestClient.get(this.url + '/' + id);
  }
}
