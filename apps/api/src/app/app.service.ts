import { Injectable } from '@nestjs/common';
import { Book } from '@maewnams-cafe/data';

@Injectable()
export class AppService {
  books: Book[] = [{ title: 'Hello world' }, { title: 'Once upon a time' }];

  getData(): Book[] {
    return this.books;
  }

  addBook() {
    this.books.push({
      title: `New book ${Math.floor(Math.random() * 1000)}`,
    });
  }
}
