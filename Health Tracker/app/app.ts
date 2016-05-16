import {App, IonicApp, Events, Platform} from 'ionic-angular';
import { Component } from 'angular2/core';
import { RocketComponent } from './rocket/rocket.component';
//import {SettingsService} from './providers/settings-data';
import {TabsPage} from './pages/tabs/tabs';
import {LoginPage} from './pages/login/login';
import {LogOutPage} from './pages/logout/logout';

interface IPageObj {
    title: string;
    component: any;
    icon: string;
    index?: number;
}

@App({
    templateUrl: 'build/app.html',
    directives: [RocketComponent],
    config: {
        platforms: {
            android: {
                tabbarLayout: 'icon-hide'
            }
        }
    }
})
export class AppComponent {
    // list of pages that can be navigated to from the left menu
    // the left menu only works after login
    // the login page disables the left menu
    appPages: IPageObj[] = [
        { title: 'Status', component: TabsPage, icon: 'home' },
        { title: 'Settings', component: TabsPage, index: 2, icon: 'settings' },
        { title: 'Rocket', component: TabsPage, index: 3, icon: 'rocket' },
        { title: 'About', component: TabsPage, index: 4, icon: 'information-circle' },
    ];
    loggedInPages: IPageObj[] = [
        { title: 'Logout', component: LogOutPage, icon: 'log-out' }
    ];
    loggedOutPages: IPageObj[] = [
        { title: 'Login', component: LoginPage, icon: 'log-in' }
    ];
    rootPage: any = TabsPage;
    loggedIn = false;

    constructor(
        private app: IonicApp,
        private events: Events,
        //private settingsService: SettingsService,
        private platform: Platform
    ) {
        //this.settingsService.load();    // load all settings

        //this.loggedIn = this.settingsService.loggedIn;

        this.listenToLoginEvents();
    }

    openPage(page: IPageObj) {
        // find the nav component and set what the root page should be
        // reset the nav to remove previous pages and only have this page
        // we wouldn't want the back button to show in this scenario
        let nav = this.app.getComponent('nav');

        console.log("loading page " + page.title);

        if (page.index) {
            nav.setRoot(page.component, { tabIndex: page.index });
        } else {
            nav.setRoot(page.component);
        }

        if (page.title === 'Logout') {
            // give the menu time to close before changing to logged out
            setTimeout(() => {
                //this.settingsService.logout();
            }, 1000);
        }
    }

    listenToLoginEvents() {
        this.events.subscribe('user:login', () => {
            this.loggedIn = true;
        });

        this.events.subscribe('user:logout', () => {
            this.loggedIn = false;
        });
    }
}
