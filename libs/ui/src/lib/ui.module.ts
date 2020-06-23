import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books/books.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BooksComponent],
  exports: [BooksComponent],
})
export class UiModule {}
