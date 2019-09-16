import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LivrePage } from '../pages/livre/livre';
import { CdPage } from '../pages/cd/cd';
import { LivresService } from '../pages/services/livre.service';
import { DetailLivrePage } from '../pages/livre/detail_livre/detail_livre';
import { DetailCdPage } from '../pages/cd/detail_cd/detail_cd';
import { CdService } from '../pages/services/cd.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    LivrePage,
    CdPage,
    DetailLivrePage,
    DetailCdPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    LivrePage,
    CdPage,
    DetailLivrePage,
    DetailCdPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LivresService,
    CdService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
