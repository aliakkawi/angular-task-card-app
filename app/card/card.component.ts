import { Component, Input, Output, EventEmitter  } from '@angular/core';

import { AppComponent } from '../app.components';

import {Task} from '../model/task';
@Component({

    moduleId: module.id, 
    selector: 'app-card',
    templateUrl: 'card.component.html', // path to our card html file.
    styleUrls: [ 'card.component.css' ],

    // we need to import this component from the app.module.ts

})

export class CardComponent {


    @Input() task: Task; 
    @Input() tasksArrayInCard:Array<Task>;
    @Output('delete') delete = new EventEmitter<Task>();

    

    /* a function that will help us to set the task to completed and uncompleted.
    it will be called from the card.component.html by clicking anywhere inside the card.
    */


        public removeTask() {

            this.delete.emit(this.task);
            
        }
    

    completeUncomplete() {

        

        if (this.task.completed) {

            this.task.completed = false;
        }else {

            this.task.completed = true;
        }

    }

    


    public isCompleted() :boolean {


        if (this.task.completed){

            return true;
        }else {
            return false;


        }
    }
}