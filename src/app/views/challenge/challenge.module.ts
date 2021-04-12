import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChallengeRoutingModule } from './challenge-routing.module';
import { ChallengeComponent } from './challenge.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [ChallengeComponent],
  imports: [
    CommonModule,
    ChallengeRoutingModule,
    ComponentsModule
  ]
})
export class ChallengeModule { }
