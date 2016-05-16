import {Actions} from '../../sam/sam.actions';
import {SettingsModel} from './settings.model';

export class SettingsActions extends Actions {
    constructor(public model: SettingsModel) {
        super(model);
    }

    public init() {
        this.model.present({});
    }

    public display() {
        this.model.present({});
        return false;
    }

    public start(data, present) {
        data.started = true;
        this.model.present(data);
        return false;
    }

    public decrement(data, present) {
        present = present || this.model.present;
        data = data || {};
        data.counter = data.counter || 3;
        var d = data;
        var m = this.model;

        setTimeout(function () {
            d.counter = d.counter - 1;
            m.present(d);
        }, 1000);        
    }

    public login(data, present) {
        present = present || this.model.present;
        data.isLoggedIn = true;
        this.model.present(data);
        return false;
    }

    public logout(data, present) {
        present = present || this.model.present;
        data.isLogged = false;
        this.model.present(data);
        return false;
    }
}