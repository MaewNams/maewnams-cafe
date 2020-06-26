import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'maewnams-cafe-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class CustomerInfoComponent implements OnInit {
  startDate = '01/01/2020 12:45' as String;

  headerActive: boolean;

  constructor() {}

  ngOnInit(): void {}
}
