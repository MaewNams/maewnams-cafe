import { Component, OnInit, Input } from '@angular/core';
import { IBook } from '@maewnams-cafe/book-model-lib';

@Component({
  selector: 'maewnams-cafe-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  @Input() books: IBook[];

  constructor() {}

  ngOnInit(): void {}
}
