import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
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
    return this.httpClient.get<CharactersHttp>(`${this.APIURL}/?page=${page}`)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  getCharacter(id: number) {
    return this.httpClient.get<Character>(`${this.APIURL}/${id}`);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body: ${error.error}`);
    }
    return throwError(
      'Error: please try again later.');
  }

}
