
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

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

import { Pro } from '@ionic/pro';

const IonicPro = Pro.init('f1aea581', {
  appVersion: "1.0.0"
});

export class IonicMonitoring implements ErrorHandler {
  handleError(err: any): void {
    IonicPro.monitoring.handleNewError(err);
  }
}

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
    {provide: ErrorHandler, useClass: IonicMonitoring},
    AuthProvider
  ]
})
export class AppModule {}
