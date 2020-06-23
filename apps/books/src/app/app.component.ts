import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '@maewnams-cafe/data';

@Component({
  selector: 'maewnams-cafe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  books: Book[] = [];

  constructor(private http: HttpClient) {
    this.fetch();
  }

  fetch() {
    this.http.get<Book[]>('/api/books').subscribe((b) => (this.books = b));
  }

  addBook() {
    this.http.post('/api/addBook', {}).subscribe(() => {
      this.fetch();
    });
  }
}
