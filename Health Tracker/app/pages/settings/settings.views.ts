import { Component, EventEmitter, Output, ElementRef, Directive, Renderer } from 'angular2/core';
import { Type } from 'angular2/src/facade/lang';
import {Observable} from 'rxjs/Observable';
import {SettingsModel} from './settings.model';
import {Views} from '../../sam/sam.views';

declare var jQuery: any;

@Directive({
    selector: '[redify]'
})
export class Redify {
    constructor(private _element: ElementRef, private _renderer: Renderer) {
        _renderer.setElementStyle(_element, 'color', 'red');
    }
}

export class SettingsViews extends Views {
    constructor() {
        super();
    }

    init(model) {
        this.loggedOut(model);
    }

    @Output() updated: EventEmitter<Type> = new EventEmitter();

    display(representation): void {
        this.representation = representation;
        this.updated.emit(representation);
    }

    // State representation of the ready state
    loggedIn(model) {        
        @Component({
            selector: 'loggedIn',
            directives:[Redify],
            template: `
            <p>You are logged in.</p>
`
        })
        class LoggedIn { }
        return LoggedIn;
    }

    // State representation of the launched state
    loggedOut(model) {
        @Component({
            selector: 'loggedOut',            
            template: `<p>Logged Out</p>
                form (ngSubmit)="settings.actions.login({})">
                <input type="submit" value="Start">
            </form>
`
        })
        class LoggedOut { }
        return LoggedOut;
    }
}