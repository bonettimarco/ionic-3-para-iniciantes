import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PersonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OperadorasProvider {
	
	public baseApiPath = "https://agenda-back-bonettimarco.c9users.io/api";

  constructor(public http: Http) {
    console.log('Hello OperadorasProvider Provider');
  }
	getOperadoras() {
		return this.http.get("https://agenda-back-bonettimarco.c9users.io/api/operadoras");
		
		
	}
  
}
