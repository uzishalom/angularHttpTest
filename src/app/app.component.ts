import { Component } from '@angular/core';
import { HttpTestServiceService } from './http-test-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentId = 0;
  post = null;
  constructor(public testServive: HttpTestServiceService) {}

  getById() {
    this.post = this.testServive.getById(this.currentId);
  }
}
