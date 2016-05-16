import {Page, NavController} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
//import {SettingsService, Settings} from '../../providers/settings-data';
import {Observable} from 'rxjs/Observable';
import {LoginPage} from '../login/login';
import {LogOutPage} from '../logout/logout';
import {Control, AbstractControl,
    ControlGroup,
  FORM_DIRECTIVES, FormBuilder, Validators} from 'angular2/common';

@Page({
    selector: 'settings',
    templateUrl: 'build/pages/settings/settings.html',
    directives: [FORM_DIRECTIVES]
})
export class SettingsPage {
    authForm: ControlGroup;
    calendar: AbstractControl;
    sheet: AbstractControl;

    validateEmail(c: Control) {
        let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

        return EMAIL_REGEXP.test(c.value) ? null : {
            validateEmail: {
                valid: false
            }
        };
    }

    constructor(private nav: NavController, fb: FormBuilder) {
        
    }
}