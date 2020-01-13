import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  templateUrl: './dashboard-page.component.html'
})
export class DashboardPageComponent implements OnInit {

  pageNr: number;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        tap((params: ParamMap) => {
          this.pageNr = params.get('pageNr') as number;
        })
      )
      .subscribe();
  }

}