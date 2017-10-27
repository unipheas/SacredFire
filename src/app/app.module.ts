
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PassedFlamesPage } from './../pages/passedFlames/passedFlames';
import { DeadFlamesPage } from './../pages/deadFlames/deadFlames';
import { LiveFlamesPage } from './../pages/liveFlames/liveFlames';
import { AddFlamePage } from './../pages/addFlame/addFlame';
import { AboutPage } from './../pages/about/about';
import { ProfilePage } from './../pages/profile/profile';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    AddFlamePage,
    LiveFlamesPage,
    DeadFlamesPage,
    PassedFlamesPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    AddFlamePage,
    LiveFlamesPage,
    DeadFlamesPage,
    PassedFlamesPage,
    ProfilePage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
