import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChallengeRoutingModule } from './challenge-routing.module';
import { ChallengeComponent } from './challenge.component';


@NgModule({
  declarations: [ChallengeComponent],
  imports: [
    CommonModule,
    ChallengeRoutingModule
  ]
})
export class ChallengeModule { }
