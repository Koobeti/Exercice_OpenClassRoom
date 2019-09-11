import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { modelLivre } from '../../models/modelLivre';
import { LivresService } from '../services/livre.service';

@Component({
  selector: 'page-livre',
  templateUrl: 'livre.html',
})
export class LivrePage {

  listLivre: modelLivre[];
  /*
  listLivre = [
                {auteur: "Agatha Christie", titre: "Dix petits nègres"},
                {auteur: "Victor Hugo", titre: "Les misérables"}
              ];*/

  constructor(public navCtrl: NavController, public navParams: NavParams, public livreService: LivresService) {
  }

  ionViewWillEnter() {
    this.listLivre = this.livreService.listLivre.slice();
  }

  afficheLivre() {

  }
}
