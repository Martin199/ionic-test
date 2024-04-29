import { Component, OnInit, inject } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { UtilsService } from 'src/app/services/utils.service';
import { IResultsHeroes } from '../../interfaces/heroes-interfaces';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-details-heroes',
  templateUrl: './details-heroes.component.html',
  styleUrls: ['./details-heroes.component.scss'],
})
export class DetailsHeroesComponent implements OnInit {

  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly translate = inject(TranslateService);
  utilServices = inject(UtilsService);

  Heroe: any = {}

  constructor() {
    this.utilServices.getDeviceLanguage().then(languageCode => {
      if (languageCode) {
        this.translate.use(languageCode?.match(/en|es/) ? languageCode : 'en');
      }
    });
  }

  ngOnInit() {
    this.Heroe = this._getValueRoutes();
  }

  private _getValueRoutes() {
    const param: string | null = this._activatedRoute.snapshot.queryParamMap.get('body')
    return param ? JSON.parse(param) : "";
  }

  public getUrls(path_: any, extension: string) {
    return path_ + '.' + extension
  }

}
