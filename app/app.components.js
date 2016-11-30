"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var task_1 = require('./model/task');
var AppComponent = (function () {
    function AppComponent() {
        // private task1: Task = {
        //     content: "Learn to code",
        //     completed: false
        // }
        this.tasksArray = []; // array of tasks.
        this.currentTask = new task_1.Task(null, false);
    }
    // function,
    AppComponent.prototype.addTask = function () {
        // make a new task.
        var newTask = new task_1.Task(this.currentTask.content, this.currentTask.completed); // data from the currentTask.
        // add the task to our tasksArray.
        this.tasksArray.push(newTask); // just like in js.   we will be using event binding to call this function.
        this.currentTask.content = null; // this will empty the field when after adding a new task. because we are using ngModel, 
        // we will affect the field and it will become empty.
    };
    AppComponent.prototype.removeAccount = function (task) {
        this.tasksArray.splice(this.tasksArray.indexOf(task), 1);
    };
    AppComponent.prototype.isArrayEmpty = function () {
        if (this.tasksArray.length == 0) {
            return true;
        }
        else {
            return false;
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.components.js.map