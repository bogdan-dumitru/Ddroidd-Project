import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  currentPage = '';
  isSearchClicked = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router) {
      router.events.subscribe((val) => {
        this.currentPage = this.router.url;
      });
  }

  ngOnInit(): void {
    this.checkRouteParams();
  }

  navigateToHome(): void {
    this.router.navigate(['/home']).then();
  }

  navigateToAbout(): void {
    this.router.navigate(['/about']).then();
  }

  navigateToContact(): void {
    this.router.navigate(['/contact']).then();
  }

  searchClicked(): void {
    this.isSearchClicked = !this.isSearchClicked;
  }

  private checkRouteParams(): void {
    this.route.params.subscribe(
      (params: Params): void => {
        const id = params.id;
      }
    );
  }
}
