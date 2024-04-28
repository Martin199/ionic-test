import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { DetailsHeroesComponent } from './components/details-heroes/details-heroes.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'details',
    component: DetailsHeroesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
