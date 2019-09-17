import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-reglage',
  templateUrl: 'reglage.html'
})
export class ReglagePage {
  constructor(public navCtrl: NavController, private menuCtrl: MenuController) {
  }

  onToggleMenu() {    
    this.menuCtrl.open();
  }
}