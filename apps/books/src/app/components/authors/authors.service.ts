import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { IAuthor } from '@maewnams-cafe/author-model-lib';
import { map, catchError } from 'rxjs/operators';
import { Observable, Subject, throwError } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  refreshList$ = new Subject<IAuthor>();

  constructor(private apollo: Apollo) {
    this.refreshList$ = new Subject<IAuthor>();
  }

  getAuthots$ = (): Observable<Array<IAuthor>> => {
    const getAuthors = gql`
      query {
        getAuthors {
          id
          name
        }
      }
    `;
    return this.apollo
      .query({
        query: getAuthors,
      })
      .pipe(
        map((x) => x.data['getAuthors']),
        catchError((e) => throwError(e))
      );
  };

  addAuthor(authorID: String, name: String): Observable<IAuthor> {
    const mutation = gql`
      mutation addAuthor($authorID: String, $name: String) {
        addAuthor(authorID: $authorID, name: $name) {
          id
          name
        }
      }
    `;
    return this.apollo
      .mutate({
        mutation: mutation,
        variables: {
          authorID: authorID,
          name: name,
        },
      })
      .pipe(map((x) => x.data['addAuthor']));
  }
}
