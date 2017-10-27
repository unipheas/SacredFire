import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PassedFlamesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-passedFlames',
  templateUrl: 'passedFlames.html',
})
export class PassedFlamesPage {

  temp = [
    {
      name: 'fireOne',
      passed: 5
    },
    {
      name: 'fireTwo',
      passed: 2
    },
    {
      name: 'fireThree',
      passed: 8
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

}
