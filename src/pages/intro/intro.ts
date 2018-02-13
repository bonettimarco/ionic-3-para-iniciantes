import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { PersonProvider } from '../../providers/person/person';
import { OperadorasProvider } from '../../providers/operadoras/operadoras';
/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
  providers: [
	PersonProvider
  ]
})
export class IntroPage {
	
	public lista_telefones = new Array<any>();
	public lista_operadoras = new Array<any>();

  constructor(
	public navCtrl: NavController,
	public navParams: NavParams,
	public personProvider: PersonProvider,
	public operadorasProvider: OperadorasProvider
	) {
  }

  ionViewDidLoad() {
	  this.personProvider.getPerson().subscribe(
		data=>{
			const response = (data as any);
			const objeto_retorno = JSON.parse(response._body);
			this.lista_telefones = objeto_retorno;
		  console.log(objeto_retorno);
	  }, error => {
		  console.log(error);
	  }
	  ),
	  this.operadorasProvider.getOperadoras().subscribe(
		data=>{
			const responseOp = (data as any);
			const objeto_retornoOp = JSON.parse(responseOp._body);
			this.lista_operadoras = objeto_retornoOp;
		  console.log(objeto_retornoOp);
	  }, error => {
		  console.log(error);
	  }
	  )
	  
  }
  
  goToTabsPage(){
	  this.navCtrl.push(TabsPage);
	  
  }

}
