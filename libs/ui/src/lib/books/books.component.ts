import { Component, OnInit, Input } from '@angular/core';
import { Book } from '@maewnams-cafe/data';

@Component({
  selector: 'maewnams-cafe-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  @Input() books: Book[];

  constructor() {}

  ngOnInit(): void {}
}
