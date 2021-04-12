import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/character.interface';

@Component({
  selector: 'app-card-character',
  templateUrl: './card-character.component.html',
  styleUrls: ['./card-character.component.scss']
})
export class CardCharacterComponent implements OnInit {

  @Input() character: Character = {
    id:	0,
    name:	'Name',
    status:	'No-status',
    species:	'Species',
    type:	'Type',
    gender:	'Gender',
    origin:	{
      name: 'Origin name',
      url: 'Origin URL',
    },
    location: {
      name: 'Location name',
      url: 'Location url',
    },
    image:	'https://placeimg.com/300/300/people',
    episode: ['1', '2', '33', '23', '21'],
    url:	'Character URL',
    created:	'Date created'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
