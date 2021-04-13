import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharactersArrayMock } from 'src/assets/mocks/character.mock';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let store = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    spyOn(localStorage, 'getItem').and.callFake((storeData) => {
      return store = storeData;
    });

  });

  it('should create', () => {
    const parseJson = () => {
      const json = JSON.stringify(store);
      JSON.parse(json);
    };

    expect(parseJson).not.toThrow();
    expect(component).toBeTruthy();
  });

  it('should toggle btn view', () => {
    let qtty = 1;
    component.showBtn(qtty);
    expect(component.hideButton).toBeFalse();
    qtty = CharactersArrayMock.length
    component.showBtn(qtty);
    expect(component.hideButton).toBeTrue();
  });

  it('should show more characters into view', () => {
    let numberDisplayed = component.numberDisplayed;
    let initLenght = component.charactersOnView.length;
    component.showMoreCharacters()
    expect(component.charactersOnView.length).toBe(initLenght + numberDisplayed);
  });

  it('should hide btn of show more characters', () => {
    component.charactersOnView = component.characters;
    component.showMoreCharacters()
    expect(component.hideButton).toBeTrue();
  });

  it('should show qtty of characters selected', () => {
    let charactersLenght = component.characters.length;
    let charactersOnViewLenght = component.charactersOnView.length;
    if (charactersLenght === charactersOnViewLenght) {
      expect(component.showBtn).toHaveBeenCalled();
      component.showMoreCharacters()
    }
  });

  xit('should select display characters', async() => {
    spyOn(component, 'onSelectShow');
    let select =  fixture.debugElement.nativeElement.querySelector('select');
    select.change();
    fixture.whenStable().then(() => {
      component.resetCharactersList(20)
      expect(component.charactersOnView.length).toBe(20);
      //expect(component.showBtn).toHaveBeenCalled();
    });
  });

});
