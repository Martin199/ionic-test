import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  routerCtrl = inject(Router);
  loadingCtrl = inject(LoadingController);

  constructor() { }

  routerLink(url: string, body?: any) {
    return this.routerCtrl.navigate([url], {queryParams: {body}});
  }

  loading(){
    return this.loadingCtrl.create({spinner: 'crescent'});
  }
}
