//this is the task class so we can make instances of.
"use strict";
var Task = (function () {
    function Task(content, completed) {
        this.content = content;
        this.completed = completed;
    }
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=task.js.map