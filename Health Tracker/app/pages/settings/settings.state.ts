import {State} from '../../sam/sam.state';  // SAM model
import {SettingsActions} from './settings.actions';
import {SettingsViews} from './settings.views';

export class SettingsState extends State {
    constructor(public views: SettingsViews, public actions: SettingsActions) {
        super(views, actions);
    }

    loggedIn = function(model) {
        return (model.isLoggedIn);
    }

    loggedOut = function (model) {
        return (!model.isLoggedIn);
    }

    calendar = function (model) {
        return model.calendar;
    }

    sheet = function (model) {
        return model.sheet;
    }

    representation(model) {
        var representation = {};

        if (this.loggedIn(model)) {
            representation = this.views.loggedIn(model);
        }

        if (this.loggedOut(model)) {
            representation = this.views.loggedOut(model);
        }

        this.views.display(representation);
    }

    next(model) {
        if (!this.loggedIn(model)) {
            this.actions.login({}, model.present);
        }
    }

    redner(model) {
        //super.render(model);
        this.representation(model);
        this.next(model);
    }
}