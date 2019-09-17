import { Component } from '@angular/core';
import { NavParams, ViewController, AlertController } from 'ionic-angular';
import { CdService } from '../../services/cd.service';

@Component({
  selector: 'page-detail_cd',
  templateUrl: 'detail_cd.html',
})
export class DetailCdPage {
    item: {titre: string, auteur: "", compositeur: "", image_album: "", preter: number};
    index: number;
    titre: string;
    auteur: string;
    compositeur: string;
    image_album: string;
    preter: number;
    title_alert: string;
    
    constructor(public navParam: NavParams, 
                public viewCtrl: ViewController,
                private alertCtrl: AlertController,
                public CdService: CdService){ 
      this.index = this.navParam.get('index');
      this.item = this.CdService.listCd[this.index];
  
      this.titre = this.item.titre;
      this.auteur = this.item.auteur;
      this.compositeur = this.item.compositeur;
      this.image_album = this.item.image_album;
      this.preter = this.item.preter; 
    }
  
    dismiss() {
      this.viewCtrl.dismiss();
    }
  
    changeStatus(statut)
    {
      this.presentAlert(statut);
      this.CdService.listCd[this.index].preter = statut;
      this.viewCtrl.dismiss();
    }
  
    presentAlert(statut) {
      if(statut)
        this.title_alert = "Le CD a été prété";
      else
        this.title_alert = "Le CD a été rendu";
  
      let alert = this.alertCtrl.create({
        title: this.title_alert,
        subTitle: '',
        buttons: ['Retour']
      });
      alert.present();
    }
}