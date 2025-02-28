class ToDoList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    removeTask(index) {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks.splice(index, 1);
        } else {
            console.log("Invalid index!");
        }
    }

    displayTasks() {
        console.log('Tasks:');
        this.tasks.forEach((task, index) => {
            console.log(`${index}: ${task}`);
        });
    }
}

const toDoList = new ToDoList();

toDoList.addTask('Breakfast at 8:00 AM');
toDoList.addTask('Meeting at 12:00 PM');
toDoList.displayTasks();

toDoList.removeTask(0);
toDoList.displayTasks();
