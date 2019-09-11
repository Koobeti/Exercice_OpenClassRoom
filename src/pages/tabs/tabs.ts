import { Component } from '@angular/core';
import { LivrePage } from '../livre/livre';
import { HomePage } from '../home/home';
import { CdPage } from '../cd/cd';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  homePage = HomePage;
  livrePage = LivrePage;
  cdPage = CdPage;

}
