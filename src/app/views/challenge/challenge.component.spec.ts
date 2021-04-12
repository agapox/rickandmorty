import { TestBed } from '@angular/core/testing';

import { ChallengeComponent } from './challenge.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { GetCharactersHttpResMock } from 'src/assets/mocks/character.mock';
import { CharacterService } from '../../services/character.service';
import { EpisodeService } from '../../services/episode.service';
import { LocationService } from '../../services/location.service';

describe('ChallengeComponent', () => {
  let component: ChallengeComponent;

  let characterService: CharacterService;
  let locationService: LocationService;
  let episodeService: EpisodeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengeComponent ],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [
        CharacterService,
        LocationService,
        EpisodeService
      ]
    })
    .compileComponents();

    characterService = TestBed.inject(CharacterService);
    locationService = TestBed.inject(LocationService);
    episodeService = TestBed.inject(EpisodeService);

  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(ChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(characterService).toBeTruthy();
    expect(locationService).toBeTruthy();
    expect(episodeService).toBeTruthy();
  });

  it('should have title "Challenges"', () => {
    const fixture = TestBed.createComponent(ChallengeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.main-title').textContent).toContain('Challenges');
  });

  it('should call characterService.getCharacters and save pages', () => {
    const fixture = TestBed.createComponent(ChallengeComponent);
    const challengeComponent = fixture.componentInstance;
    spyOn(characterService, 'getCharacters').and.callFake((page) => {
      return of(GetCharactersHttpResMock)
    });
    let pages = 0;
    characterService.getCharacters(1).subscribe(data => {
      pages = data.info.pages;
    })
    challengeComponent.ngOnInit();
    expect(pages).toEqual(34);
    expect(challengeComponent.getCharacterPages).toBeTruthy()
  });
});
