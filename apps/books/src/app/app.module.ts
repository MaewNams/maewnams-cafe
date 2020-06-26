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
import { ProfileComponent } from './container/profile/profile.component';

// Modules
import { GraphQLModule } from './graphql.module';
import { MaterialModule } from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// Misc
import { AuthorService } from './components/authors/authors.service';
import { BookService } from './components/books/books.service';

import { ToastrService } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookComponent,
    BookAddComponent,
    LibraryComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GraphQLModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-bottom-right',
    }),
  ],
  providers: [BookService, AuthorService, ToastrService],
  bootstrap: [AppComponent],
})
export class AppModule {}
