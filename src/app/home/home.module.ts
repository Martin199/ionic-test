import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ListHeroesComponent } from './components/list-heroes/list-heroes.component';
import { DetailsHeroesComponent } from './components/details-heroes/details-heroes.component';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [HomePage, ListHeroesComponent, DetailsHeroesComponent]
})
export class HomePageModule {}
