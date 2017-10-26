import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CemeteryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cemetery',
  templateUrl: 'cemetery.html',
})
export class CemeteryPage {

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
    console.log('ionViewDidLoad CemeteryPage');
  }

}
