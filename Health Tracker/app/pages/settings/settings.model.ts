import {Model} from '../../sam/sam.model';
import {SettingsState} from './settings.state';

export class SettingsModel extends Model {
    public calendar: string;
    public sheet: string;
    public isLoggedIn: boolean;

    constructor(public state: SettingsState) {
        super(state);
        this.calendar = "";
        this.sheet = "";
        this.isLoggedIn = false;
    }

    public present(data) {
        console.log("present : " + data);
            if (this.state.loggedIn(this)) {
                this.isLoggedIn = data.loggedIn || false;
            }
        this.state.render(this);

        //super.render(this);
    }
}