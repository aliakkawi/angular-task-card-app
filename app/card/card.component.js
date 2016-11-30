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
var task_1 = require('../model/task');
var CardComponent = (function () {
    function CardComponent() {
        this.delete = new core_1.EventEmitter();
    }
    /* a function that will help us to set the task to completed and uncompleted.
    it will be called from the card.component.html by clicking anywhere inside the card.
    */
    CardComponent.prototype.removeTask = function () {
        this.delete.emit(this.task);
    };
    CardComponent.prototype.completeUncomplete = function () {
        if (this.task.completed) {
            this.task.completed = false;
        }
        else {
            this.task.completed = true;
        }
    };
    CardComponent.prototype.isCompleted = function () {
        if (this.task.completed) {
            return true;
        }
        else {
            return false;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', task_1.Task)
    ], CardComponent.prototype, "task", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], CardComponent.prototype, "tasksArrayInCard", void 0);
    __decorate([
        core_1.Output('delete'), 
        __metadata('design:type', Object)
    ], CardComponent.prototype, "delete", void 0);
    CardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-card',
            templateUrl: 'card.component.html',
            styleUrls: ['card.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], CardComponent);
    return CardComponent;
}());
exports.CardComponent = CardComponent;
//# sourceMappingURL=card.component.js.map