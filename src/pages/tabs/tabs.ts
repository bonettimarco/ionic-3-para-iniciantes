import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { OnlinePage } from '../online/online';
import { MSicasMaisTocadasPage } from '../m-sicas-mais-tocadas/m-sicas-mais-tocadas';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = OnlinePage;
  tab5Root = MSicasMaisTocadasPage;
  constructor() {

  }
}
