var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
//adding a template (inline)
//Interpolation {{}} weave calculated strings into the text between HTML element tags and within attribute assignments
//Pipeoperators
//adding a directive
//property binding
//adding an event
//event bidning
//adding styles
var StudentListComponent = (function () {
    function StudentListComponent() {
        //by default all the properties are public
        this.studentListItems = [
            { id: 1, name: "john" },
            { id: 2, name: "jane" },
            { id: 3, name: "peter" }
        ];
        this.isAdd = true;
    }
    StudentListComponent = __decorate([
        core_1.Component({
            selector: "student-list",
            template: "\n        <div>Student List</div>\n        <ul *ngIf=\"isAdd\">\n            <li *ngFor=\"#student of studentListItems\">\n                <span>{{student.id }})</span>\n                <span>{{student.name | uppercase}}</span>\n            </li>\n        </ul>\n        <button (click)=\"isAdd=!isAdd\" [disabled]=\"isAdd\">Add List</button>\n        <button (click)=\"isAdd=!isAdd\" [disabled]=\"!isAdd\">Remove List</button>\n\n    ",
            styles: ["ul {list-style-type: none;}, "]
        })
    ], StudentListComponent);
    return StudentListComponent;
})();
exports.StudentListComponent = StudentListComponent;
//# sourceMappingURL=student-list.component.js.map