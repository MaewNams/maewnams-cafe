import { Component, OnInit } from '@angular/core';
import { IBook } from '@maewnams-cafe/book-model-lib';
import { environment } from '../../../environments/environment';
import { BookService } from '../../components/books/books.service';

@Component({
  selector: 'maewnams-cafe-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.less'],
})
export class LibraryComponent implements OnInit {
  bookID: Number;
  books: IBook[];
  addedBook: IBook;
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    console.log('init int');
    this.bookService.getBooks$().subscribe((result) => {
      this.books = result;
      this.bookID = this.books.length + 1;
      console.log('bookID', this.bookID);
    });
  }

  onAddedBook(newBook: IBook) {
    this.books.push(newBook);
    this.bookID = this.books.length + 1;
  }
}
