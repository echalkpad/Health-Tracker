import {Page, NavParams} from 'ionic-angular';
//import {HistoryPage} from '../history/history';
import {AboutPage} from '../about/about';
import {StatusPage} from '../status/status';
import {SettingsComponent} from '../settings/settings.component';
import {RocketPage} from '../rocket/rocket';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = StatusPage;
  tab2Root: any = SettingsComponent;
  //tab3Root: any = HistoryPage;
  tab3Root: any = RocketPage;
  tab4Root: any = AboutPage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }
}
