import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {CommonServiceService} from '../services/common-service.service'
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router:Router,
    public common :CommonServiceService) {}



  goToChapter()
  {
      
    this.router.navigateByUrl("/chapter");
  }
  getLanguage(language)
  {
     
    language == 'hindi'?
    this.common.language='&language=hi':
    this.common.language=''
    
  }

}
