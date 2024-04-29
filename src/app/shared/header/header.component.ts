import { Component, Input, OnInit, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  @Input() backButton!: string;
  @Input() title!: string;

  translate = inject(TranslateService);

  constructor() { 
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
		this.translate.use(browserLang?.match(/en|es/) ? browserLang : 'es');
  }

  ngOnInit() {}

}
