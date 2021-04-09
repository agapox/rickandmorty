import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Episode, EpisodesHttp } from '../interfaces/episode.interface';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  private APIURL: string = 'https://rickandmortyapi.com/api/episode';

  constructor(
    private httpClient: HttpClient,
  ) { }

  getEpisodes(page?: number): Observable<EpisodesHttp> {
    page = page ? page : 1;
    return this.httpClient.get<EpisodesHttp>(`${this.APIURL}/?page=${page}`);
  }

  getEpisode(id: number) {
    return this.httpClient.get<Episode>(`${this.APIURL}/${id}`);
  }
}
