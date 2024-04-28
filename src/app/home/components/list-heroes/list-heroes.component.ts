import { Component, OnInit, inject } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { Info, IResultsHeroes } from '../../interfaces/heroes-interfaces';
import { UtilsService } from 'src/app/services/utils.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styleUrls: ['./list-heroes.component.scss'],
})
export class ListHeroesComponent implements OnInit {

  generalServices = inject(GeneralService);
  utilServices = inject(UtilsService);

  listHeroes: IResultsHeroes[] = []

  constructor() { }

  async ngOnInit() {
    const loading = await this.utilServices.loading();
    await loading.present();
    this.generalServices.getHeroes().pipe(
      finalize(() => { loading.dismiss(); })
    ).subscribe((resp: IResultsHeroes[]) => {
      this.listHeroes = resp
    })
  }

  public getUrls(path_: any, extension: any) {
    return path_ + '.' + extension
  }

  redirect(heroe: IResultsHeroes) {
    this.utilServices.routerLink('home/details', JSON.stringify(heroe))
  }

}
