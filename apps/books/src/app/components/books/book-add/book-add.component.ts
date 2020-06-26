import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {
  uniqueNamesGenerator,
  Config,
  adjectives,
  names,
  colors,
} from 'unique-names-generator';
import { BookService } from '../books.service';
import { title } from 'process';
import { IBook } from '@maewnams-cafe/book-model-lib';

@Component({
  selector: 'maewnams-cafe-books-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.less'],
})
export class BookAddComponent implements OnInit {
  @Input() bookID: Number;
  @Output() addedBook = new EventEmitter<IBook>();

  constructor(private bookService: BookService) {}

  bookForm = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
  });

  ngOnInit(): void {}

  clickRandomBook() {
    const titleConfig: Config = {
      dictionaries: [adjectives, colors],
      separator: ' ',
      length: 2,
    };

    const authorConfig: Config = {
      dictionaries: [names, names],
      separator: ' ',
      length: 2,
    };

    this.bookForm.setValue({
      title: uniqueNamesGenerator(titleConfig),
      author: uniqueNamesGenerator(authorConfig),
    });
  }

  clickAddBook() {
    this.bookService
      .addBook(
        this.bookID,
        this.bookForm.value.title,
        this.bookForm.value.author
      )
      .subscribe((result) => {
        this.addedBook.emit(result);
      });
  }
}
