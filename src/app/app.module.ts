import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StolenPage } from './../pages/stolen/stolen';
import { CemeteryPage } from './../pages/cemetery/cemetery';
import { InventoryPage } from './../pages/inventory/inventory';
import { AddBicPage } from './../pages/add-bic/add-bic';
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
    AddBicPage,
    InventoryPage,
    CemeteryPage,
    StolenPage,
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
    AddBicPage,
    InventoryPage,
    CemeteryPage,
    StolenPage,
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
