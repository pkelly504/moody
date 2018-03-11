import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { LogMoodPage } from '../pages/log-mood/log-mood';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyAccountPage } from '../pages/my-account/my-account';
import { ViewMoodsPage } from '../pages/view-moods/view-moods';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    LogMoodPage,
    MyAccountPage,
    ViewMoodsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LogMoodPage,
    MyAccountPage,
    ViewMoodsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
