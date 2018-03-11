import { Component } from '@angular/core';

import { ViewMoodsPage, LogMoodPage, MyAccountPage } from '../pages';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root:any = ViewMoodsPage;
  tab2Root:any = LogMoodPage;
  tab3Root:any = MyAccountPage;

  constructor() {

  }
}
