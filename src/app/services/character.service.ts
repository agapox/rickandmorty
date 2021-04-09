import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character, CharactersHttp } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private APIURL: string = 'https://rickandmortyapi.com/api/character';

  constructor(
    private httpClient: HttpClient,
  ) { }

  getCharacters(page: number): Observable<CharactersHttp> {
    return this.httpClient.get<CharactersHttp>(`${this.APIURL}/?page=${page}`);
  }

  getCharacter(id: number) {
    return this.httpClient.get<Character>(`${this.APIURL}/${id}`);
  }

}
