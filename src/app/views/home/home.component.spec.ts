import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
import { CharactersArrayMock } from 'src/assets/mocks/character.mock';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let store = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [
        ReactiveFormsModule,
        RouterModule,
        ComponentsModule
      ]
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
    component.charactersFiltered = CharactersArrayMock;
    component.charactersOnView = CharactersArrayMock;
    component.showBtn();
    expect(component.hideButton).toBeTrue();
    component.charactersOnView = CharactersArrayMock.slice(0,2);
    component.showBtn();
    expect(component.hideButton).toBeFalse();
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

  it('should select display characters', async() => {
    fixture.detectChanges();
    let select: HTMLSelectElement = fixture.nativeElement.querySelector('select');
    spyOn(component, 'resetCharactersList')
    spyOn(component, 'showBtn')
    select.onchange
    select.value = select.options[0].value;
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.resetCharactersList).toHaveBeenCalled();
      expect(component.showBtn).toHaveBeenCalled();
    });
    expect(component.numberDisplayed).toEqual(4);
  });

});
