import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './dashboard-list.component.html'
})
export class DashboardListComponent implements OnInit {

  pages: {pageNr: number}[] = [];

  constructor() { }

  ngOnInit(): void {
    this.pages = [{pageNr: 1}, {pageNr: 2}, {pageNr: 3}, {pageNr: 4}, {pageNr: 5}];
  }

}