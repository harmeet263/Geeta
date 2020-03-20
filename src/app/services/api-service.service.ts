import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {CommonServiceService} from '../services/common-service.service'


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  params:any;
  httpOptions:any;
  dependencies:any

  constructor(public http: HttpClient,public common:CommonServiceService) {}
 
  initHeaders()
  {
    const params = new HttpParams({
      fromObject: {
        grant_type: 'client_credentials',
        client_id: 'GRq4YEQGRz2mf8t2RK9On7D6Pykv7i7r35xmpp3e',
        client_secret: 'U7rkhaBSHdr3cOHLs4mbBl6W8s8rGApVDHtiGdbHQ1VQo83pVw',
        scope: 'verse chapter',
      }
    });
  
      const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    this.params=params;
    this.httpOptions=httpOptions;
  }

  postApi()
  {
    this.initHeaders();
    return this.http.post(this.common.url+'auth/oauth/token', this.params, this.httpOptions)
  }

  basepath()
  {
    this.dependencies='?access_token='+this.common.bearerToken+this.common.language;
  }

  getApi(path)
{   
  this.basepath();
  return this.http.get(this.common.url+path+this.dependencies)
}
}
