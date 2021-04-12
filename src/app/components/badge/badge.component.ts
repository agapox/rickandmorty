import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  template: '<span [ngClass]="status.toLocaleLowerCase()">{{ status }}</span>',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {

  @Input() status: string = 'status'; // 'Alive', 'Dead' or 'unknown'

  constructor() { }

  ngOnInit(): void {
  }

}
