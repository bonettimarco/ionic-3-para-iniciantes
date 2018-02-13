import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { IntroPageModule } from '../pages/intro/intro.module';
import { OnlinePageModule } from '../pages/online/online.module';
import { MusicasMaisTocadasPageModule } from '../pages/musicas-mais-tocadas/musicas-mais-tocadas.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule} from "@angular/http"
import { PersonProvider } from '../providers/person/person';
import { OperadorasProvider } from '../providers/operadoras/operadoras';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
	IntroPageModule, 
	HttpModule,
	OnlinePageModule,
	MusicasMaisTocadasPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PersonProvider,
	OperadorasProvider
  ]
})
export class AppModule {}
