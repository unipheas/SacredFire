
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AboutPage } from './../pages/about/about';
import { LiveFlamesPage } from './../pages/liveFlames/liveFlames';
import { AddFlamePage } from './../pages/addFlame/addFlame';
import { DeadFlamesPage } from './../pages/deadFlames/deadFlames';
import { PassedFlamesPage } from './../pages/passedFlames/passedFlames';
import { ProfilePage } from './../pages/profile/profile';

import Auth0Cordova from '@auth0/cordova';
import { AuthProvider } from './../providers/auth/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public auth: AuthProvider
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Live Flames', component: LiveFlamesPage},
      { title: 'Passed Flames', component: PassedFlamesPage},
      { title: 'Dead Flames', component: DeadFlamesPage},
      { title: 'Add Flame', component: AddFlamePage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // initalize auth0
      (<any>window).handleOpenURL = (url) => {
        Auth0Cordova.onRedirectUri(url);
      };

      // setup login here.
      if (!this.auth.isAuthenticated()) {
        this.auth.login();
        this.openPage(HomePage);
      }
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page == 'about') {
      this.nav.setRoot(AboutPage);
    }
    this.nav.setRoot(page.component);
  }

  logout() {
    this.auth.logout();
    this.platform.exitApp();
  }
}
