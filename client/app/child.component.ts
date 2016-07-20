import {Component} from 'angular2/core';
import {TesterService} from './tester.service';

@Component({
    selector: 'my-child',
    template: `<h1 (click)="changeit()"  >My {{tester2Service.wordc}} Child</h1>`

})
export class ChildComponent {
    constructor(private tester2Service: TesterService) {}

    changeit(){
        this.tester2Service.wordp = "changed p from child";
    }

}