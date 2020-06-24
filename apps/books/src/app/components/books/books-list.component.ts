import { IBook } from '@maewnams-cafe/book-model-lib';
import { BookService } from './books.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'maewnams-cafe-books-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.less'],
})
export class BooksComponent implements OnInit {
  constructor(private bookService: BookService) {}

  books: IBook[];

  ngOnInit(): void {
    this.bookService.getBooks$().subscribe((result) => {
      this.books = result;
    });
  }
}
