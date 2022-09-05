import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('listBox', { static: true }) listBox: ElementRef | undefined;

  public selectedRoute = 'unary';

  constructor(
    public route: ActivatedRoute,
    public router: Router,
  ) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe((event: any) => {
      this.selectedRoute = event.url.replace(/^\//, '');
    });

  }

  async ngOnInit() {
  }

  changeRoute() {
    this.router.navigate([this.selectedRoute], { queryParams: {} });
  }

}
