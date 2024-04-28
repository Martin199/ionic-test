import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  httpServices = inject(HttpClient)


  constructor() { }

  getHeroes(){
    return this.httpServices.get(`${environment.url}/characters?limit=20&apikey=${environment.key}&ts=27/04/2024, 20:36:21&hash=47f635448b710be66df18ac908290170`)
    .pipe(
      map((item:any) => item.data.results)
    )
  }

  getHeroesById(id: string){
    return this.httpServices.get(`${environment.url}/characters/${id}?apikey=${environment.key}&ts=27/04/2024, 20:36:21&hash=47f635448b710be66df18ac908290170`)
    .pipe(
      map((item:any) => item.data.results)
    )
  }
}
