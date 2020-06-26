import { IBook } from '@maewnams-cafe/book-model-lib';
import { BookService } from '../books.service';
import {
  Component,
  OnInit,
  Input,
  Inject,
  Output,
  EventEmitter,
} from '@angular/core';
import { UNIQUE_ID_PROVIDER, UNIQUE_ID } from './IDGenerator';

@Component({
  selector: 'maewnams-cafe-books-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.less'],
  providers: [UNIQUE_ID_PROVIDER],
})
export class BookComponent implements OnInit {
  @Input() book: IBook;
  @Output() liked = new EventEmitter<String>();
  isLike = false;

  // constructor(@Inject(UNIQUE_ID) public checkboxId: string) {}

  like(bookTitle: String) {
    this.liked.emit(bookTitle);
    this.isLike = !this.isLike;
  }

  ngOnInit(): void {}
}
