import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  constructor(public navCtrl: NavController) {

  }

	
	public somaDoisNumeros(num1:number, num2:number): void{
		alert(num1 + num2);
		
		
	}
	
	ionViewOidLoad() {
		//this.somaDoisNumeros(10, 99);
		
	}
	

}
