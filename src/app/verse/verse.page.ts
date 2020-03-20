import { Component } from '@angular/core';
import {ApiServiceService} from '../services/api-service.service';
import {CommonServiceService} from '../services/common-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verse',
  templateUrl: './verse.page.html',
  styleUrls: ['./verse.page.scss'],
})
export class VersePage  {
  title="";
  button="";
  verseData:any;

  constructor(
    public api:ApiServiceService, 
    public common:CommonServiceService,
    public router:Router) { }

  
  ionViewWillEnter()
  {
    this.getVerses();
    this.common.language==''? this.title='Verse' : this.title ="छंद";
    this.common.language==''? this.button='Show' : this.button ="प्रदर्शन";
  }

  getVerses()
  {
    let path ='api/v1/chapters/'+this.common.chapterNumber+'/verses'
    this.api.getApi(path).subscribe(data=>{
      console.log(data)
      this.verseData=data;
    },err=>{console.log(err)})
 
  }

}
