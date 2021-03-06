import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
