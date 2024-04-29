import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Device } from '@capacitor/device';
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

  async getDeviceLanguage(): Promise<string> {
    try {
      const info = await Device.getLanguageCode();
      console.log('Language code:', info.value);
      return info.value;
    } catch (error) {
      console.error('Error obtaining language code:', error);
      return 'error';
    }
  }
}
