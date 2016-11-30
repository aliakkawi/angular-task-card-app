import { Component } from '@angular/core';

import { Task } from './model/task';

@Component({
    moduleId: module.id, 
    selector: 'my-app', // was used to make a my-app item in index.html  Loading please wait.
    templateUrl: 'app.component.html',
    styleUrls: [ 'app.component.css' ],
})
export class AppComponent { 


    // private task1: Task = {

    //     content: "Learn to code",
    //     completed: false

    // }

    private tasksArray:Array<Task> = [ /*new Task("Buy a monkey", false), new Task("Walk the turtle", false) */]; // array of tasks.

    private currentTask = new Task(null, false);

    // function,
    addTask() { 


        // make a new task.

            let newTask = new Task(this.currentTask.content, this.currentTask.completed); // data from the currentTask.

        // add the task to our tasksArray.
        
            this.tasksArray.push(newTask); // just like in js.   we will be using event binding to call this function.
            this.currentTask.content = null; // this will empty the field when after adding a new task. because we are using ngModel, 
            // we will affect the field and it will become empty.
        }

        public removeAccount (task:Task) { 

        this.tasksArray.splice(this.tasksArray.indexOf(task), 1);


    }

        public isArrayEmpty():boolean {

            if (this.tasksArray.length == 0){

                return true;
            } else {

                return false;
            }
        }
        

    }
        