import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-detail_livre',
  templateUrl: 'detail_livre.html',
})
export class DetailLivrePage {
  item: {titre: "", auteur: "", description: ""};
  titre: string;
  auteur: string;
  description: string;

  constructor(public navParam: NavParams, public viewCtrl: ViewController){ 
    this.item = this.navParam.get('item');

    this.titre = this.item.titre;
    this.auteur = this.item.auteur;
    this.description = this.item.description; 
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
