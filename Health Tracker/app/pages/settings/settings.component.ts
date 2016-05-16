import {Component, ComponentRef, Sam, SettingsActions, SettingsModel, SettingsState, SettingsViews, DynamicComponentLoader, ElementRef} from './settings.exports';
import {Directive, Renderer} from 'angular2/core';
import {NgClass} from 'angular2/common';

@Component({
    selector: 'rocket',
    templateUrl: 'build/pages/settings/settings.template.html',
    directives: [NgClass]
})
export class SettingsComponent extends Sam<SettingsActions, SettingsModel, SettingsState, SettingsViews> {
    private component: ComponentRef;

    constructor(private loader: DynamicComponentLoader, private elementRef: ElementRef) {
        super(SettingsActions, SettingsModel, SettingsState, SettingsViews);
        this.actions.init();
    }

    ngOnInit() {
        this.views.updated.subscribe((representation) => {
            // Not sure how efficient this is at replacing the DOM. Gut tells me it's expensive.
            // Could create a single view/template with ngIfs and a ViewModel that it would bind to.
            // ViewModel properties would update based on state
            if (this.component !== undefined) { console.log("comptype=" + this.component.componentType + " rep.name=" + representation.name); }
            if (this.component == undefined || this.component.componentType !== representation.name) {
                this.loader.loadIntoLocation(representation, this.elementRef, 'settings').then((component) => {
                    if (this.component) {
                        this.component.dispose();
                    }
                    component.instance.rocket = this;
                    this.component = component;
                });
            }
        });

        this.views.updated.subscribe((representation) => {
            if (this.state.loggedIn(this.model)) {
                //jQuery('rocket').find('.rocket_shadow').css("animation", "shadow_flare .35s infinite");  
                console.log("launching set css");
            }            
        });

        this.views.updated.next(this.views.representation);
    }
}