import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { modelLivre } from '../../models/modelLivre';
import { LivresService } from '../services/livre.service';
import { DetailLivrePage } from './detail_livre/detail_livre';

@Component({
  selector: 'page-livre',
  templateUrl: 'livre.html',
})
export class LivrePage {

  listLivre: modelLivre[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public livreService: LivresService,
              public modalCtrl: ModalController) {
  }

  ionViewWillEnter() {
    this.listLivre = this.livreService.listLivre.slice();
  }

  afficheLivre(item) {
    let pageModal = this.modalCtrl.create(DetailLivrePage, {item: item});
    pageModal.present();
  }
}
