import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UiModule } from '@maewnams-cafe/ui';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing';

//  Components
import { AppComponent } from './app.component';
import { BooksComponent } from './components/books/books-list.component';

// Containers
import { LibraryComponent } from './container/library/library.component';

// Modules
import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [AppComponent, BooksComponent, LibraryComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, GraphQLModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
