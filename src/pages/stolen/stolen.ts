import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StolenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-stolen',
  templateUrl: 'stolen.html',
})
export class StolenPage {

  temp = [
    {
      name: 'fireOne',
      stolen: 5
    },
    {
      name: 'fireTwo',
      stolen: 2
    },
    {
      name: 'fireThree',
      stolen: 8
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StolenPage');
  }

}
