import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenge-one',
  templateUrl: './challenge-one.component.html',
  styleUrls: ['./challenge-one.component.scss']
})
export class ChallengeOneComponent implements OnInit {

  @Input() challenge: {
    name: string,
    letter: string,
    count: number,
    time: number
  } = {
    name: '',
    letter: '',
    count: 0,
    time: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

}
