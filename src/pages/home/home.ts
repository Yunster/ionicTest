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
      
      let isDone: boolean = false;
      
      let alert = this.alertCtrl.create({
          title: 'Information',
          subTitle: "kkkk",
          buttons: ['OK']
      });
      
      alert.present();
  }

}
