import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Profile {
    
  constructor(public alertCtrl: AlertController) {

  }
  
  fndSave(){
      
      let decimal: number = 6;
      let hex: number = 0xf00d;
      let binary: number = 0b1010;
      let octal: number = 0o744;
      
      let alert = this.alertCtrl.create({
          title: 'Information',
          subTitle: decimal + ", " + hex + ", " + binary + ", " + octal,
          buttons: ['OK']
      });
      
      alert.present();
  }

}
