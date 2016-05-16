import {Page} from 'ionic-angular';
import { RocketComponent } from '../../rocket/rocket.component';

@Page({
    template: `<h1>Our rocket...</h1>
    <rocket id='rocket-1'>Rocket 1</rocket>
`,
    directives: [RocketComponent]
})
export class RocketPage {

  constructor() {

  }
}
