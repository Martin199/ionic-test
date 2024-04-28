import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  router = inject(Router)

  constructor() { }

  routerLink(url: string, body?: any) {
    return this.router.navigate([url], {queryParams: {body}});
  }

  
}
