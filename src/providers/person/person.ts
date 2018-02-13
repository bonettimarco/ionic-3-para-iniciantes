import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PersonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PersonProvider {
	
	public baseApiPath = "https://agenda-back-bonettimarco.c9users.io/api";

  constructor(public http: Http) {
    console.log('Hello PersonProvider Provider');
  }
	getPerson() {
		return this.http.get("https://agenda-back-bonettimarco.c9users.io/api/fones");
		
		
	}
  
}
