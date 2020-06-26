import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { IBook } from '@maewnams-cafe/book-model-lib';
import { map, catchError } from 'rxjs/operators';
import { Observable, Subject, throwError } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  refreshList$ = new Subject<IBook>();

  constructor(private apollo: Apollo) {
    this.refreshList$ = new Subject<IBook>();
  }

  getBooks$ = (): Observable<Array<IBook>> => {
    const getBooks = gql`
      query {
        getBooks {
          id
          title
          author
        }
      }
    `;
    return this.apollo
      .query({
        query: getBooks,
      })
      .pipe(
        map((x) => x.data['getBooks']),
        catchError((e) => throwError(e))
      );
  };

  addBook(bookID: Number, title: String, author: String): Observable<IBook> {
    const mutation = gql`
      mutation addBook($bookID: Int, $title: String, $author: String) {
        addBook(bookID: $bookID, title: $title, author: $author) {
          id
          title
          author
        }
      }
    `;
    return this.apollo
      .mutate({
        mutation: mutation,
        variables: {
          bookID: bookID,
          title: title,
          author: author,
        },
      })
      .pipe(map((x) => x.data['addBook']));
  }
}
