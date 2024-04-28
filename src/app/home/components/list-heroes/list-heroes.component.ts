import { Component, OnInit, inject } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import {  Info, IResultsHeroes } from '../../interfaces/heroes-interfaces';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styleUrls: ['./list-heroes.component.scss'],
})
export class ListHeroesComponent  implements OnInit {

  generalServices = inject(GeneralService);
  utilServices = inject(UtilsService);

  listHeroes: IResultsHeroes[] = []

  constructor() { }

  ngOnInit() {
    this.generalServices.getHeroes().subscribe((resp: IResultsHeroes[]) => {
      this.listHeroes = resp
      // const p: string = resp[0].thumbnail?.path
      
       console.log(resp)
      // console.log(this.listHeroes)
    })
  }

  public getUrls(path_: any, extension: any){
    return path_ + '.' + extension
  }

  redirect(heroe: IResultsHeroes){
    debugger
    this.utilServices.routerLink('home/details', JSON.stringify(heroe))
  }

}
