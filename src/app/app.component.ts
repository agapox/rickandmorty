import { Component, OnInit } from '@angular/core';
import { Character, CharactersHttp } from './interfaces/character.interface';
import { Episode, EpisodesHttp } from './interfaces/episode.interface';
import { Location, LocationsHttp } from './interfaces/location.interface';
import { CharacterService } from './services/character.service';
import { LocationService } from './services/location.service';
import { EpisodeService } from './services/episode.service';

interface Count {
  count: number;
  time: number;
  pages: number;
  letter: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    CharacterService,
    LocationService,
    EpisodeService
  ]
})
export class AppComponent implements OnInit {
  title = 'Rick and Morty';

  initTimer: number = 0;
  finalTimer: number = 0;
  fase1Timer: number = 0;
  fase2Timer: number = 0;

  // CHARACTERS
  characters: Character[] = [];
  charactersData: Count = {
    count: 0,
    time: 0,
    pages: 0,
    letter: 'c'
  };

  // LOCATIONS
  locations: Location[] = [];
  locationsData: Count = {
    count: 0,
    time: 0,
    pages: 0,
    letter: 'l'
  };

  // LOCATIONS
  episodes: Episode[] = [];
  episodesData: Count = {
    count: 0,
    time: 0,
    pages: 0,
    letter: 'e'
  };
  epiLocation: {
    id: number,
    name: string,
    location: string[]
  }[] = []

  constructor(
    private characterService: CharacterService,
    private locationService: LocationService,
    private episodeService: EpisodeService,
  ) {}

  ngOnInit() {
    this.initTimer = performance.now();
    this.getCharacterPages();
    this.getLocationPages();
    this.getEpisodePages();
  }

  getCharacterPages() {
    this.characterService.getCharacters(1).subscribe((data: CharactersHttp) => {
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
        i === pages && this.calcCountAndTime(this.charactersData);
      });
    }
  }

  calcCountAndTime(data: Count) {
    data.count = this.countLetters(this.characters, data.letter.toLocaleLowerCase());
    data.time = (performance.now() - this.initTimer);
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

  getLocationPages() {
    this.locationService.getLocations(1).subscribe((data: LocationsHttp) => {
      this.locationsData.pages = data.info.pages;
    },
    (err) => console.log(err),
    () => {
      this.getAllLocations(this.locationsData.pages);
    });
  }

  getAllLocations(pages: number) {
    for (let i = 1; i <= pages; i++) {
      this.locationService.getLocations(i).subscribe((data: LocationsHttp) => {
        this.locations.push(...data.results)
      },
      (err) => console.error(err),
      () => {
        i === pages && this.calcCountAndTime(this.locationsData);
      });
    }
  }

  getEpisodePages() {
    this.episodeService.getEpisodes(1).subscribe((data: EpisodesHttp) => {
      this.episodesData.pages = data.info.pages;
    },
    (err) => console.error(err),
    () => {
      this.getAllEpisodes(this.episodesData.pages);
    });
  }

  getAllEpisodes(pages: number) {
    for (let i = 1; i <= pages; i++) {
      this.episodeService.getEpisodes(i).subscribe((data: EpisodesHttp) => {
        this.episodes.push(...data.results)
      },
      (err) => console.error(err),
      () => {
        i === pages && this.calcCountAndTime(this.episodesData);
        this.fase1Timer = performance.now() - this.initTimer;
        i === pages && this.getEpisodesCharacterLocationsOrigin(this.episodes);
      });
    }
  }

  getEpisodesCharacterLocationsOrigin(episodes: Episode[]) {
    let epiLocWo: {
      id: number,
      name: string,
      location: string[]
    }[] = []
    episodes.forEach(({id, name, characters}: Episode, i) => {
      let charLocationWorld: string[] = [];
      characters.forEach((el: string) => {
        const char = this.characters[Number(el.split('https://rickandmortyapi.com/api/character/')[1])];
        char?.location && charLocationWorld.push(char.location.name);
        char?.origin && charLocationWorld.push(char.origin.name);
      })
      epiLocWo.push({
        id,
        name,
        location: [...new Set(charLocationWorld)]
      });
    })
    this.epiLocation = epiLocWo
    const t1 = performance.now()
    this.fase2Timer = t1 - this.initTimer;
    console.log(t1)
  }
}
