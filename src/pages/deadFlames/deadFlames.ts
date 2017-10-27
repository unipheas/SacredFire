import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DeadFlamesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-deadFlames',
  templateUrl: 'deadFlames.html',
})
export class DeadFlamesPage {

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
    console.log('ionViewDidLoad DeadFlamesPage');
  }

}
