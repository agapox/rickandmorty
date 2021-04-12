import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardCharacterComponent } from './cards/card-character/card-character.component';
import { BadgeComponent } from './badge/badge.component';
import { RouterModule } from '@angular/router';

const Components = [
  HeaderComponent,
  FooterComponent,
  CardCharacterComponent,
  BadgeComponent
];

@NgModule({
  declarations: [
    Components
  ],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports: [
    Components
  ]
})
export class ComponentsModule { }
