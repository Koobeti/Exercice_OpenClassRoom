import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { modelCd } from '../../models/modelCd';
import { CdService } from '../services/cd.service';
import { DetailCdPage } from './detail_cd/detail_cd';

@Component({
  selector: 'page-cd',
  templateUrl: 'cd.html',
})
export class CdPage {

  listCd: modelCd[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public CdService: CdService,
              public modalCtrl: ModalController) {
  }

  ionViewWillEnter() {
    this.listCd = this.CdService.listCd.slice();
  }

  afficheCD(index) {
    let pageModal = this.modalCtrl.create(DetailCdPage, {index: index});
    pageModal.present();
  }
}
