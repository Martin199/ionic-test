import { Component, OnInit, inject } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { UtilsService } from 'src/app/services/utils.service';
import { IResultsHeroes } from '../../interfaces/heroes-interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-heroes',
  templateUrl: './details-heroes.component.html',
  styleUrls: ['./details-heroes.component.scss'],
})
export class DetailsHeroesComponent  implements OnInit {

  private readonly generalServices = inject(GeneralService);
  utilServices = inject(UtilsService);
  private readonly _activatedRoute = inject(ActivatedRoute);

  Heroe: any = {}


  constructor() { }

  ngOnInit() {
    this.Heroe = this._getValueRoutes();
  }

  private _getValueRoutes(){
    const param: string | null = this._activatedRoute.snapshot.queryParamMap.get('body')
    return param ? JSON.parse(param) : "";
  }

  public getUrls(path_: any, extension: any){
    return path_ + '.' + extension
  }

}
