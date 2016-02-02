import {Component} from 'angular2/core';
import {StudentListComponent} from "./student-list.component";

@Component({
    selector:'app',
    template:`
        <student-list></student-list>
    `,
    directives:[StudentListComponent]
})


export class AppComponent{

}