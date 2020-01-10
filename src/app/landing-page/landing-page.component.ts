import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './landing-page.component.html'
})
export class LandingPageComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  navigateTo(pathSegments: string[]): void {
    this.router.navigate(pathSegments);
  }
}