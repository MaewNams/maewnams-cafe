import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { UiModule } from '@maewnams-cafe/ui';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing';

//  Components
import { AppComponent } from './app.component';
import { BooksComponent } from './components/books/books-list/books-list.component';
import { BookComponent } from './components/books/book/book.component';
import { BookAddComponent } from './components/books/book-add/book-add.component';

// Containers
import { LibraryComponent } from './container/library/library.component';

// Modules
import { GraphQLModule } from './graphql.module';

// Misc
import { BookService } from './components/books/books.service';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookComponent,
    BookAddComponent,
    LibraryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GraphQLModule,
    ReactiveFormsModule,
  ],
  providers: [BookService],
  bootstrap: [AppComponent],
})
export class AppModule {}
