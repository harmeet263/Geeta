import { Component } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {ApiServiceService} from '../services/api-service.service';
import {CommonServiceService} from '../services/common-service.service';
import { Router } from '@angular/router';
import { Alert } from 'selenium-webdriver';
@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.page.html',
  styleUrls: ['./chapter.page.scss'],
})
export class ChapterPage {


  public chapterData:any;
  title="";
  button="";

    constructor(public http: HttpClient,
      public api:ApiServiceService, 
      public common:CommonServiceService,
      public router:Router) {}

 
  ionViewWillEnter()
  {
    this.common.language==''? this.title='Chapter' : this.title ="अध्याय";
    this.common.language==''? this.button='More' : this.button ="अधिक";
    this.loginAuthentication();
     
  }
  
getChapters()
{   
  this.api.getApi('api/v1/chapters').subscribe(data=>{
    console.log(data)
     this.chapterData=data;
  },err=>
  {
    console.log(err)
  })

}
loginAuthentication()
{
  this.api.postApi().subscribe((res:any) => {
      console.log(res)
      this.common.bearerToken=res.access_token;
      this.getChapters();
  },err=>{
    alert(err.message);
    
    
  })
}

goToVerse(chapterNum)
  { 
 this.common.chapterNumber=chapterNum; 
 this.router.navigateByUrl("/verse");
  }



 

}
