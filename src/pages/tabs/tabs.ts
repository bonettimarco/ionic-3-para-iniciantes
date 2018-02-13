import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { OnlinePage } from '../online/online';
import { IntroPage } from '../intro/intro';
import { MusicasMaisTocadasPage } from '../musicas-mais-tocadas/musicas-mais-tocadas';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = IntroPage;
  tab5Root = OnlinePage;
  tab6Root = MusicasMaisTocadasPage;
  constructor() {

  }
}
