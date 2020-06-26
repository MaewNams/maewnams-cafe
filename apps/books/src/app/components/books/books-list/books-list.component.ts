import { IBook } from '@maewnams-cafe/book-model-lib';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'maewnams-cafe-books-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.less'],
})
export class BooksComponent implements OnInit {
  @Input() books: IBook[];
  constructor() {}
  likedBooks = [];

  ngOnInit(): void {}

  onLiked(bookTitle: string) {
    const book = this.likedBooks.find((x) => x === bookTitle);
    if (book) {
      this.likedBooks = this.likedBooks.filter((x) => x !== bookTitle);
    } else {
      this.likedBooks.push(bookTitle);
    }
  }
}
