import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the OnLinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-on-line',
  templateUrl: 'online.html',
  providers: [
	Camera
  ]
})
export class OnlinePage {
	img = "";

  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams, 
  private camera: Camera
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnLinePage');
  }
    goToTabsPage(){
	  this.navCtrl.push(TabsPage);
	  
  }

  tirarFoto(){
		const options: CameraOptions = {
		  quality: 100,
		  destinationType: this.camera.DestinationType.DATA_URL,
		  encodingType: this.camera.EncodingType.JPEG,
		  mediaType: this.camera.MediaType.PICTURE
		}

		this.camera.getPicture(options).then((imageData) => {
		this.img = 'data:image/jpeg;base64,' + imageData;
		}, (err) => {
		 // Handle error
		});
  }

}
