import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MSicasMaisTocadasPage } from './m-sicas-mais-tocadas';

@NgModule({
  declarations: [
    MSicasMaisTocadasPage,
  ],
  imports: [
    IonicPageModule.forChild(MSicasMaisTocadasPage),
  ],
  exports: [
	MSicasMaisTocadasPage
  ]
})
export class MSicasMaisTocadasPageModule {}
