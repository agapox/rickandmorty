import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location, LocationsHttp } from '../interfaces/location.interface';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private APIURL: string = 'https://rickandmortyapi.com/api/character';

  constructor(
    private httpClient: HttpClient,
  ) { }

  getLocations(page?: number): Observable<LocationsHttp> {
    page = page ? page : 1;
    return this.httpClient.get<LocationsHttp>(`${this.APIURL}/?page=${page}`);
  }

  getLocation(id: number) {
    return this.httpClient.get<Location>(`${this.APIURL}/${id}`);
  }
}
