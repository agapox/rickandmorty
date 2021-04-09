import { getTestBed, TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { CharacterService } from './character.service';

import { GetCharactersHttpResMock, GetCharacterHttpResMock } from '../../assets/mocks/character.mock';

describe('CharacterService', () => {
  let service: CharacterService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    injector = getTestBed();
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(CharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of characters', () => {
    const mockData = GetCharactersHttpResMock;
    expect(service).toBeTruthy();
    const page = 1
    service.getCharacters(page).subscribe(data => {
      expect(data).toBeTruthy();
      expect(data).toBe(mockData)
      expect(data.results.length).toBe(mockData.results.length)

    });

    const req = httpMock.expectOne({
      method: "GET",
      url: `https://rickandmortyapi.com/api/character/?page=${page}`
    });

    req.flush(mockData);

    httpMock.verify();
  });

  it('should return a character', () => {
    expect(service).toBeTruthy();
    const mockData = GetCharacterHttpResMock;
    const id = 1;
    expect(service).toBeTruthy();
    service.getCharacter(id).subscribe(data => {
      expect(data).toBeTruthy();
      expect(data).toBe(mockData)
      expect(data.name).toBe('Rick Sanchez');

    });

    const req = httpMock.expectOne({
      method: "GET",
      url: 'https://rickandmortyapi.com/api/character/' + id
    });

    req.flush(mockData);

    httpMock.verify();
  });

});
