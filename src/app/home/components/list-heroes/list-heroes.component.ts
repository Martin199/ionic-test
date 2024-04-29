import { Component, OnInit, inject } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { Info, IResultsHeroes } from '../../interfaces/heroes-interfaces';
import { UtilsService } from 'src/app/services/utils.service';
import { finalize } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styleUrls: ['./list-heroes.component.scss'],
})
export class ListHeroesComponent implements OnInit {

  generalServices = inject(GeneralService);
  utilServices = inject(UtilsService);
  translate = inject(TranslateService);
  listHeroes: IResultsHeroes[] = []

  constructor( ) { 
    this.utilServices.getDeviceLanguage().then(languageCode => {
      if (languageCode) {
        this.translate.use(languageCode?.match(/en|es/) ? languageCode : 'es');
      }
    });
  }

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
