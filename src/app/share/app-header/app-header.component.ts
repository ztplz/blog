import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {
  selectedTab: string;

  constructor() {
  }

  ngOnInit() {
    console.log(this);
    // this.selectedTab = 'home';
  }

  onSelect(tab: string): void {
    console.log(tab);
    this.selectedTab = tab;
    console.log(this.selectedTab);
  }
}