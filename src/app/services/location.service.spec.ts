import { getTestBed, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { LocationService } from './location.service';
import { GetLocationsHttpResMock, GetLocationHttpResMock } from '../../assets/mocks/location.mock';

describe('LocationService', () => {
  let service: LocationService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(LocationService);
    injector = getTestBed();
    httpMock = injector.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of locations', () => {
    const mockData = GetLocationsHttpResMock;
    expect(service).toBeTruthy();
    const page = 1;
    service.getLocations(page).subscribe(data => {
      expect(data).toBeTruthy();
      expect(data).toBe(mockData)
      expect(data.results.length).toBe(mockData.results.length)

    });

    const req = httpMock.expectOne({
      method: "GET",
      url: `https://rickandmortyapi.com/api/location/?page=${page}`
    });

    req.flush(mockData);

    httpMock.verify();
  });

  it('should return a location', () => {
    expect(service).toBeTruthy();
    const mockData = GetLocationHttpResMock;
    const id = 1;
    expect(service).toBeTruthy();
    service.getLocation(id).subscribe(data => {
      expect(data).toBeTruthy();
      expect(data).toBe(mockData)
      expect(data.name).toBe('Earth (C-137)');

    });

    const req = httpMock.expectOne({
      method: "GET",
      url: 'https://rickandmortyapi.com/api/location/' + id
    });

    req.flush(mockData);

    httpMock.verify();
  });

});
