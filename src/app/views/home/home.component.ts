import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Character } from 'src/app/interfaces/character.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  characters: Character[] = [];
  charactersFiltered: Character[] = [];
  charactersOnView: Character[] = [];
  numberDisplayed: number = 10;
  hideButton = false;
  loadedLocalStorageChar = false;
  searchCharactersForm: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
    this.getData();
    this.getForm();
  }

  getForm() {
    this.searchCharactersForm.addControl('character', new FormControl(null));
  }

  onSubmit() {
    this.filterCharacters(this.searchCharactersForm.value.character)
  }

  onInputChange() {
    this.onSubmit();
  }

  onSelectCharactersDisplayed(data: any) {
    this.numberDisplayed = Number(data.target.value);
    this.resetCharactersList(this.charactersFiltered);
    this.showBtn()
  }

  showBtn() {
    if (this.charactersOnView.length === this.charactersFiltered.length) {
      this.hideButton = true;
    } else {
      this.hideButton = false;
    }
  }

  filterCharacters(text: string) {
    this.charactersFiltered = this.characters.filter((char) => {
      return char.name.toLowerCase().includes(text.toLowerCase()) ||
        char.gender.toLowerCase().includes(text.toLowerCase()) ||
        char.status.toLowerCase().includes(text.toLowerCase()) ||
        char.species.toLowerCase().includes(text.toLowerCase())
    });
    this.resetCharactersList(this.charactersFiltered);
    this.showBtn();
  }

  resetCharactersList(characters: Character[]) {
    this.charactersOnView = characters.slice(0, this.numberDisplayed);
  }

  getData() {
    if (localStorage.characters !== '') {
      this.characters = JSON.parse(localStorage.characters)
        .sort((a: Character, b: Character) => a.id > b.id ? 1 : -1);
      this.charactersFiltered = this.characters;
      this.resetCharactersList(this.characters);
      this.loadedLocalStorageChar = true;
    }
  }

  showMoreCharacters() {
    this.charactersOnView.push(
      ...this.charactersFiltered.slice(this.charactersOnView.length, this.charactersOnView.length + this.numberDisplayed)
    );
    if (this.charactersOnView.length === this.charactersFiltered.length) {
      this.showBtn();
    }
  }

}
