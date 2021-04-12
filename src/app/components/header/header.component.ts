import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string = 'Rick and Morty';
  showMenuMobile = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMobileMenu() {
    this.showMenuMobile = !this.showMenuMobile;
  }



}
