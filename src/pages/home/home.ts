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
      
      // Type test
      let todayMenu = new Menu(['pancakes', 'waffles', 'orange juice'], 1);
      
      let alert = this.alertCtrl.create({
          title: 'Information',
          subTitle: todayMenu.list(),
          buttons: ['OK']
      });
      
      alert.present();
  }

}

class Menu {
    items: Array<string>;
    pages: number;
    
    constructor(item_list: Array<string>, total_pages: number) {
        this.items = item_list;
        this.pages = total_pages;
    }
    
    list(): string {
        let msg = 'Our menu for today : ';
        for(let i=0, len=this.items.length ; i<len ; i++) {
            msg += this.items[i];
            if(i != len - 1) {
                msg += ", ";
            }
        }
        
        return msg;
    }
}