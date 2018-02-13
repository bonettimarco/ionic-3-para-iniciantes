import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MusicasMaisTocadasPage } from './musicas-mais-tocadas';

@NgModule({
  declarations: [
    MusicasMaisTocadasPage,
  ],
  imports: [
    IonicPageModule.forChild(MusicasMaisTocadasPage),
  ],
  exports: [
	MusicasMaisTocadasPage
  ]
})
export class MusicasMaisTocadasPageModule {}
