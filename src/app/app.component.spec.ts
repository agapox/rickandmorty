import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CharacterService } from './services/character.service';
import { EpisodeService } from './services/episode.service';
import { LocationService } from './services/location.service';

describe('AppComponent', () => {
  let characterService: CharacterService;
  let locationService: LocationService;
  let episodeService: EpisodeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        CharacterService,
        LocationService,
        EpisodeService
      ]
    }).compileComponents();

    characterService = TestBed.inject(CharacterService);
    locationService = TestBed.inject(LocationService);
    episodeService = TestBed.inject(EpisodeService);

  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
    expect(characterService).toBeTruthy();
    expect(locationService).toBeTruthy();
    expect(episodeService).toBeTruthy();
  });

  it(`should have as title 'Rick and Morty'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Rick and Morty');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.main-title').textContent).toContain(fixture.componentInstance.title);
  });

});
