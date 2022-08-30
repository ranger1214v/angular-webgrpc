import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('listBox', { static: true }) listBox: ElementRef | undefined;

  constructor() {
  }

  async ngOnInit() {
  }

}
