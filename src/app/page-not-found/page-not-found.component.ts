import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template : `
  <h1> Page not found try different url </h1>
  `,
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
