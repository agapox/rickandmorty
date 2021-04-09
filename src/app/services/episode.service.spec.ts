import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';

import { EpisodeService } from './episode.service';
import { GetEpisodeHttpResMock, GetEpisodesHttpResMock } from '../../assets/mocks/episode.mock';

describe('EpisodeService', () => {
  let service: EpisodeService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(EpisodeService);
    injector = getTestBed();
    httpMock = injector.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of episodes', () => {
    const mockData = GetEpisodesHttpResMock;
    expect(service).toBeTruthy();
    const page = 1;
    service.getEpisodes(page).subscribe(data => {
      expect(data).toBeTruthy();
      expect(data).toBe(mockData)
      expect(data.results.length).toBe(mockData.results.length)

    });

    const req = httpMock.expectOne({
      method: "GET",
      url: `https://rickandmortyapi.com/api/episode/?page=${page}`
    });

    req.flush(mockData);

    httpMock.verify();
  });

  it('should return a episode', () => {
    expect(service).toBeTruthy();
    const mockData = GetEpisodeHttpResMock;
    const id = 1;
    expect(service).toBeTruthy();
    service.getEpisode(id).subscribe(data => {
      expect(data).toBeTruthy();
      expect(data).toBe(mockData)
      expect(data.name).toBe('Pilot');

    });

    const req = httpMock.expectOne({
      method: "GET",
      url: 'https://rickandmortyapi.com/api/episode/' + id
    });

    req.flush(mockData);

    httpMock.verify();
  });

});
