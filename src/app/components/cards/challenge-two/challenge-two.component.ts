import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenge-two',
  templateUrl: './challenge-two.component.html',
  styleUrls: ['./challenge-two.component.scss']
})
export class ChallengeTwoComponent implements OnInit {

  @Input() episode: {
    id: number,
    name: string,
    location: string[]
  } = {
    id: 1,
    name: 'Episode Name',
    location: ['Episode location 1', 'Episode location 2']
  };

  constructor() { }

  ngOnInit(): void {
  }

}
