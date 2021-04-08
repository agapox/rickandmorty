import { Component, OnInit } from '@angular/core';
import { Character, CharactersHttp } from './interfaces/character.interface';
import { Episode, EpisodesHttp } from './interfaces/episode.interface';
import { Location, LocationsHttp } from './interfaces/location.interface';
import { CharacterService } from './services/character.service';

interface Count {
  count: number;
  time: number;
  pages: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CharacterService]
})
export class AppComponent implements OnInit {
  title = 'rickandmorty';

  initTimer: number = 0;
  // CHARACTERS
  characters: Character[] = [];
  charactersData: Count = {
    count: 0,
    time: 0,
    pages: 0
  }

  constructor(
    private characterService: CharacterService
  ) {}

  ngOnInit() {
    this.initTimer = performance.now();
    this.getCharacterPages();

  }

  getCharacterPages() {
    this.characterService.getCharacters().subscribe((data: CharactersHttp) => {
      this.charactersData.pages = data.info.pages;
    },
    (err) => console.error(err),
    () => {
      this.getAllCharacters(this.charactersData.pages);
    });
  }

  getAllCharacters(pages: number) {
    for (let i = 1; i <= pages; i++) {
      this.characterService.getCharacters(i).subscribe((data: CharactersHttp) => {
        this.characters.push(...data.results)
      },
      (err) => console.error(err),
      () => {
        if (i === pages) {
          this.calcCountAndTime(this.charactersData)
        }
      });
    }
  }

  calcCountAndTime(data: Count) {
    data.count = this.countLetters(this.characters, 'c');
    data.time = (performance.now() - this.initTimer)/1000;
  }

  countLetters(arr: (Character[] | Location[] | Episode[]), letter: string) {
    let count = 0
    arr.forEach((el: (Character | Location | Episode)) => {
      el.name.toLowerCase().split('').forEach((char:string) => {
        char === letter.toLocaleLowerCase() && count++;
      });
    });
    return count;
  }
}
