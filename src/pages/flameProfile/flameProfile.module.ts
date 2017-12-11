import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlameProfilePage } from './flameProfile';

@NgModule({
  declarations: [
    FlameProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(FlameProfilePage),
  ],
})
export class FlameProfilePageModule {}
