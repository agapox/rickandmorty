import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChallengeComponent } from './challenge.component';

const routes: Routes = [
  { path: '', component: ChallengeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChallengeRoutingModule { }
