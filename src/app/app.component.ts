import { Component, inject } from '@angular/core';
import { UtilsService } from './services/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  utilServices = inject(UtilsService);

  constructor() {
    this.utilServices.getDeviceLanguage().then(languageCode => {
      console.log("El idioma del dispositivo es:", languageCode);
    });
  }
}
