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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    LivrePage,
    CdPage
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
    CdPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LivresService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
