import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/character.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  characters: Character[] = [];
  charactersOnView: Character[] = [];
  numberDisplayed: number = 10;
  hideButton = false;
  loadedLocalStorageChar = false;

  constructor() { }

  ngOnInit(): void {
    this.getData();
  }

  onSelectShow(data: any) {
    this.resetCharactersList(data.target.value);
    this.showBtn(data.target.value)
  }

  showBtn(qtty: number) {
    if (Number(qtty) === this.characters.length) {
      this.hideButton = true;
    } else {
      this.hideButton = false;
    }
  }

  resetCharactersList(show: number) {
    this.charactersOnView = this.characters.slice(0, show);
  }

  getData() {
    if (localStorage.characters !== '') {
      this.characters = JSON.parse(localStorage.characters)
        .sort((a: Character, b: Character) => a.id > b.id ? 1 : -1);
      this.resetCharactersList(this.numberDisplayed);
      this.loadedLocalStorageChar = true;
    }
  }

  showMoreCharacters() {
    this.charactersOnView.push(
      ...this.characters.slice(this.charactersOnView.length, this.charactersOnView.length + this.numberDisplayed)
    );
    if (this.charactersOnView.length === this.characters.length) {
      this.showBtn(this.charactersOnView.length);
    }
  }

}
