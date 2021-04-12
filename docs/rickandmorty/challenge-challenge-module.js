(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["challenge-challenge-module"],{

/***/ "Cxb8":
/*!********************************************************!*\
  !*** ./src/app/views/challenge/challenge.component.ts ***!
  \********************************************************/
/*! exports provided: ChallengeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeComponent", function() { return ChallengeComponent; });
/* harmony import */ var _services_character_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/character.service */ "yMVB");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/location.service */ "yHma");
/* harmony import */ var _services_episode_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/episode.service */ "VFTt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _components_cards_challenge_one_challenge_one_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/cards/challenge-one/challenge-one.component */ "52j4");
/* harmony import */ var _components_cards_challenge_two_challenge_two_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/cards/challenge-two/challenge-two.component */ "LzDz");










function ChallengeComponent_strong_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, ctx_r0.fase1Timer, "SSS"));
} }
function ChallengeComponent_div_55_app_challenge_one_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-challenge-one", 18);
} if (rf & 2) {
    const challenge_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("challenge", challenge_r4);
} }
function ChallengeComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ChallengeComponent_div_55_app_challenge_one_1_Template, 1, 1, "app-challenge-one", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const challenge_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", challenge_r4);
} }
function ChallengeComponent_strong_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, ctx_r2.fase2Timer, "SSS"));
} }
function ChallengeComponent_div_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-challenge-two", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const episode_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("episode", episode_r7);
} }
class ChallengeComponent {
    constructor(characterService, locationService, episodeService) {
        this.characterService = characterService;
        this.locationService = locationService;
        this.episodeService = episodeService;
        this.title = 'Rick and Morty';
        this.initTimer = 0;
        this.finalTimer = 0;
        this.fase1Timer = 0;
        this.fase2Timer = 0;
        this.challengesData = [];
        // CHARACTERS
        this.characters = [];
        this.charactersData = {
            count: 0,
            time: 0,
            pages: 0,
            letter: 'c'
        };
        // LOCATIONS
        this.locations = [];
        this.locationsData = {
            count: 0,
            time: 0,
            pages: 0,
            letter: 'l'
        };
        // EPISODES
        this.episodes = [];
        this.episodesData = {
            count: 0,
            time: 0,
            pages: 0,
            letter: 'e'
        };
        this.epiLocation = [];
    }
    ngOnInit() {
        this.initTimer = performance.now();
        this.getCharacterPages();
        this.getLocationPages();
        this.getEpisodePages();
    }
    getChallengesData(name, dataChal) {
        const { count, time, letter } = dataChal;
        this.challengesData.push({ name, count, time, letter });
    }
    getCharacterPages() {
        this.characterService.getCharacters(1).subscribe((data) => {
            this.charactersData.pages = data.info.pages;
        }, (err) => console.error(err), () => {
            this.getAllCharacters(this.charactersData.pages);
        });
    }
    getAllCharacters(pages) {
        for (let i = 1; i <= pages; i++) {
            this.characterService.getCharacters(i).subscribe((data) => {
                this.characters.push(...data.results);
            }, (err) => console.error(err), () => {
                if (i === pages) {
                    this.calcCountAndTime(this.charactersData);
                    this.saveCharactersLocalStorage(this.characters);
                    this.getChallengesData('Characters', this.charactersData);
                }
            });
        }
    }
    saveCharactersLocalStorage(data) {
        if (typeof (Storage) !== undefined) {
            localStorage.setItem('characters', JSON.stringify(data));
        }
    }
    calcCountAndTime(data) {
        data.count = this.countLetters(this.characters, data.letter.toLocaleLowerCase());
        data.time = (performance.now() - this.initTimer);
    }
    countLetters(arr, letter) {
        let count = 0;
        arr.forEach((el) => {
            el.name.toLowerCase().split('').forEach((char) => {
                char === letter.toLocaleLowerCase() && count++;
            });
        });
        return count;
    }
    getLocationPages() {
        this.locationService.getLocations(1).subscribe((data) => {
            this.locationsData.pages = data.info.pages;
        }, (err) => console.log(err), () => {
            this.getAllLocations(this.locationsData.pages);
        });
    }
    getAllLocations(pages) {
        for (let i = 1; i <= pages; i++) {
            this.locationService.getLocations(i).subscribe((data) => {
                this.locations.push(...data.results);
            }, (err) => console.error(err), () => {
                if (i === pages) {
                    this.calcCountAndTime(this.locationsData);
                    this.saveLocationsLocalStorage(this.locations);
                    this.getChallengesData('Locations', this.locationsData);
                }
            });
        }
    }
    saveLocationsLocalStorage(data) {
        if (typeof (Storage) !== undefined) {
            localStorage.setItem('locations', JSON.stringify(data));
        }
    }
    getEpisodePages() {
        this.episodeService.getEpisodes(1).subscribe((data) => {
            this.episodesData.pages = data.info.pages;
        }, (err) => console.error(err), () => {
            this.getAllEpisodes(this.episodesData.pages);
        });
    }
    getAllEpisodes(pages) {
        for (let i = 1; i <= pages; i++) {
            this.episodeService.getEpisodes(i).subscribe((data) => {
                this.episodes.push(...data.results);
            }, (err) => console.error(err), () => {
                if (i === pages) {
                    this.calcCountAndTime(this.episodesData);
                    this.fase1Timer = performance.now() - this.initTimer;
                    this.saveEpisodesLocalStorage(this.episodes);
                    this.getEpisodesCharacterLocationsOrigin(this.episodes);
                    this.getChallengesData('Episodes', this.episodesData);
                }
            });
        }
    }
    saveEpisodesLocalStorage(data) {
        if (typeof (Storage) !== undefined) {
            localStorage.setItem('episodes', JSON.stringify(data));
        }
    }
    getEpisodesCharacterLocationsOrigin(episodes) {
        let epiLocWo = [];
        episodes.forEach(({ id, name, characters }, i) => {
            let charLocationWorld = [];
            characters.forEach((el) => {
                const char = this.characters[Number(el.split('https://rickandmortyapi.com/api/character/')[1])];
                (char === null || char === void 0 ? void 0 : char.location) && charLocationWorld.push(char.location.name);
                (char === null || char === void 0 ? void 0 : char.origin) && charLocationWorld.push(char.origin.name);
            });
            epiLocWo.push({
                id,
                name,
                location: [...new Set(charLocationWorld)]
            });
        });
        this.epiLocation = epiLocWo;
        const t1 = performance.now();
        this.fase2Timer = t1 - this.initTimer;
        console.log(t1);
    }
}
ChallengeComponent.ɵfac = function ChallengeComponent_Factory(t) { return new (t || ChallengeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_character_service__WEBPACK_IMPORTED_MODULE_0__["CharacterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_location_service__WEBPACK_IMPORTED_MODULE_1__["LocationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_episode_service__WEBPACK_IMPORTED_MODULE_2__["EpisodeService"])); };
ChallengeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ChallengeComponent, selectors: [["app-challenge"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([
            _services_character_service__WEBPACK_IMPORTED_MODULE_0__["CharacterService"],
            _services_location_service__WEBPACK_IMPORTED_MODULE_1__["LocationService"],
            _services_episode_service__WEBPACK_IMPORTED_MODULE_2__["EpisodeService"]
        ])], decls: 98, vars: 5, consts: [[1, "episodes"], [1, "container", "mb-2", "mt-2"], [1, "row"], [1, "col"], [1, "pb-2", "main-title"], [1, "lead"], ["href", "https://rickandmortyapi.com/", "target", "_blank", 1, "rm-api"], [1, "challenge-1", "challenge"], [1, "container", "mb-2"], [1, "pb-2"], [4, "ngIf"], [1, "container", "fase1", "mb-5"], ["class", "col-sm-12 col-md-6 col-lg-4", 4, "ngFor", "ngForOf"], [1, "container", "episodes__task"], [1, "mb-4"], ["class", "col-sm-12", 4, "ngFor", "ngForOf"], [1, "col-sm-12", "col-md-6", "col-lg-4"], [3, "challenge", 4, "ngIf"], [3, "challenge"], [1, "col-sm-12"], [3, "episode"]], template: function ChallengeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Challenges");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " This a technical challenge for a job offer using the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " RickandMortyApi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Challenge # 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Char counter:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "How many times does the letter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "\"l\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, " (case insensitive) appear in the names of all the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "locations");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "how many times does the letter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "\"e\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, " (case insensitive) appear in the names of all the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "episodes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "How many times does the letter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "\"c\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, " (case insensitive) appear in the names of all the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "characters");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "how long the program took \uD83D\uDC46 in total");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, " Total execution of Fase # 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, " Execution Time: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](51, ChallengeComponent_strong_51_Template, 3, 4, "strong", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, " milliseconds. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](55, ChallengeComponent_div_55_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Challenge # 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "Episode locations:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, " For each ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "episode");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, ", indicate the quantity and a list with the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "location");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, " (");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "origin");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, ") of all the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "characters");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, " that appeared in that ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "episode");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, " (without repeating) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "how long the program took \uD83D\uDC46 in total");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, " Total execution of Fase # 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](88, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89, " Execution Time: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](90, ChallengeComponent_strong_90_Template, 3, 4, "strong", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, " milliseconds. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](97, ChallengeComponent_div_97_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.fase1Timer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.challengesData);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.fase2Timer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.episodes.length, " Episodes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.epiLocation);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _components_cards_challenge_one_challenge_one_component__WEBPACK_IMPORTED_MODULE_5__["ChallengeOneComponent"], _components_cards_challenge_two_challenge_two_component__WEBPACK_IMPORTED_MODULE_6__["ChallengeTwoComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".episodes[_ngcontent-%COMP%]   a.rm-api[_ngcontent-%COMP%] {\n  color: #79b069 !important;\n}\n.episodes[_ngcontent-%COMP%]   a.rm-api[_ngcontent-%COMP%]:visited {\n  color: inherit;\n}\n.episodes[_ngcontent-%COMP%]   a.rm-api[_ngcontent-%COMP%]:hover {\n  color: #43b4ce !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjaGFsbGVuZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUU7RUFDRSx5QkFBQTtBQUhKO0FBSUk7RUFDRSxjQUFBO0FBRk47QUFJSTtFQUNFLHlCQUFBO0FBRk4iLCJmaWxlIjoiY2hhbGxlbmdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy8nO1xyXG5cclxuLmVwaXNvZGVzIHtcclxuXHJcbiAgYS5ybS1hcGkge1xyXG4gICAgY29sb3I6ICRjb2xvcl9STTIgIWltcG9ydGFudDtcclxuICAgICY6dmlzaXRlZCB7XHJcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgfVxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAkY29sb3JfUk0xICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "IcSU":
/*!*************************************************************!*\
  !*** ./src/app/views/challenge/challenge-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ChallengeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeRoutingModule", function() { return ChallengeRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _challenge_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./challenge.component */ "Cxb8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");




const routes = [
    { path: '', component: _challenge_component__WEBPACK_IMPORTED_MODULE_1__["ChallengeComponent"] }
];
class ChallengeRoutingModule {
}
ChallengeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ChallengeRoutingModule });
ChallengeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function ChallengeRoutingModule_Factory(t) { return new (t || ChallengeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ChallengeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "VFTt":
/*!*********************************************!*\
  !*** ./src/app/services/episode.service.ts ***!
  \*********************************************/
/*! exports provided: EpisodeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpisodeService", function() { return EpisodeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");


class EpisodeService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.APIURL = 'https://rickandmortyapi.com/api/episode';
    }
    getEpisodes(page) {
        return this.httpClient.get(`${this.APIURL}/?page=${page}`);
    }
    getEpisode(id) {
        return this.httpClient.get(`${this.APIURL}/${id}`);
    }
}
EpisodeService.ɵfac = function EpisodeService_Factory(t) { return new (t || EpisodeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
EpisodeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EpisodeService, factory: EpisodeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "yHma":
/*!**********************************************!*\
  !*** ./src/app/services/location.service.ts ***!
  \**********************************************/
/*! exports provided: LocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return LocationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");


class LocationService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.APIURL = 'https://rickandmortyapi.com/api/location';
    }
    getLocations(page) {
        return this.httpClient.get(`${this.APIURL}/?page=${page}`);
    }
    getLocation(id) {
        return this.httpClient.get(`${this.APIURL}/${id}`);
    }
}
LocationService.ɵfac = function LocationService_Factory(t) { return new (t || LocationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
LocationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocationService, factory: LocationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "yMVB":
/*!***********************************************!*\
  !*** ./src/app/services/character.service.ts ***!
  \***********************************************/
/*! exports provided: CharacterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterService", function() { return CharacterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");


class CharacterService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.APIURL = 'https://rickandmortyapi.com/api/character';
    }
    getCharacters(page) {
        return this.httpClient.get(`${this.APIURL}/?page=${page}`);
    }
    getCharacter(id) {
        return this.httpClient.get(`${this.APIURL}/${id}`);
    }
}
CharacterService.ɵfac = function CharacterService_Factory(t) { return new (t || CharacterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CharacterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CharacterService, factory: CharacterService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ydzq":
/*!*****************************************************!*\
  !*** ./src/app/views/challenge/challenge.module.ts ***!
  \*****************************************************/
/*! exports provided: ChallengeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeModule", function() { return ChallengeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _challenge_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./challenge-routing.module */ "IcSU");
/* harmony import */ var _challenge_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./challenge.component */ "Cxb8");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");





class ChallengeModule {
}
ChallengeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ChallengeModule });
ChallengeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function ChallengeModule_Factory(t) { return new (t || ChallengeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _challenge_routing_module__WEBPACK_IMPORTED_MODULE_1__["ChallengeRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ChallengeModule, { declarations: [_challenge_component__WEBPACK_IMPORTED_MODULE_2__["ChallengeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _challenge_routing_module__WEBPACK_IMPORTED_MODULE_1__["ChallengeRoutingModule"],
        src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=challenge-challenge-module.js.map