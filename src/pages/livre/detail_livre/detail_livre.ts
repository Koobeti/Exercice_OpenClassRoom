import { Component } from '@angular/core';
import { NavParams, ViewController, AlertController } from 'ionic-angular';
import { LivresService } from '../../services/livre.service';

@Component({
  selector: 'page-detail_livre',
  templateUrl: 'detail_livre.html',
})
export class DetailLivrePage {
  item: {titre: string, auteur: "", description: "", preter: number};
  index: number;
  titre: string;
  auteur: string;
  description: string;
  preter: number;
  title_alert: string;
  
  constructor(public navParam: NavParams, 
              public viewCtrl: ViewController,
              private alertCtrl: AlertController,
              public livreService: LivresService){ 
    this.index = this.navParam.get('index');
    this.item = this.livreService.listLivre[this.index];

    this.titre = this.item.titre;
    this.auteur = this.item.auteur;
    this.description = this.item.description;
    this.preter = this.item.preter; 
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  changeStatus(statut)
  {
    this.presentAlert(statut);
    this.livreService.listLivre[this.index].preter = statut;
    this.viewCtrl.dismiss();
  }

  presentAlert(statut) {
    if(statut)
      this.title_alert = "Le livre a été prété";
    else
      this.title_alert = "Le live a été rendu";

    let alert = this.alertCtrl.create({
      title: this.title_alert,
      subTitle: '',
      buttons: ['Retour']
    });
    alert.present();
  }
}
