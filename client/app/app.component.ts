import {Component} from 'angular2/core';
import {ChildComponent} from './child.component';
import {TesterService} from './tester.service';

@Component({
    selector: 'my-app',
    template: `<h1>My {{testerService.wordp}} Angular 2 App</h1>
    <my-child></my-child>
    `
    ,
    directives: [ChildComponent],
    providers: [TesterService]
})
export class AppComponent {
    constructor(private testerService: TesterService) {}

}