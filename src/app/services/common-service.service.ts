import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

public url="https://bhagavadgita.io/";
public language="&language=hi";
public bearerToken="";
chapterNumber="";
verseNumber="";
 
  constructor() { }
}
