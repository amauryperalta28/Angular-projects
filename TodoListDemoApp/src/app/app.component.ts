import { Component } from '@angular/core';
import { taskStatus, TODOTask } from './tasks/interfaces/tasks-interfaces.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoListDemoApp';
  display: boolean = false;

  newTask: string = "";
  taskToModified: number = -1;
  tasks: TODOTask[] = [];

  openModal(): void {
    this.display = true;
  }

  saveTask(): void {

    if (this.newTask === "" || this.newTask == undefined) {
      alert("El texto de la tarea no puede estar vacio");
      return;
    }
    if (this.taskToModified !== -1) {
      this.tasks[this.taskToModified].name = this.newTask;
    } else {
      const task: TODOTask = {
        name: this.newTask,
        status: taskStatus.Todo
      };

      this.tasks.push(task);
    }

    this.newTask = "";
    this.display = false;
    this.taskToModified = -1;
  }

  delete(id: number): void {
    console.log(id);

    this.tasks.splice(id, 1);
  }

  edit(id: number): void {

    const taskToEdit = this.tasks[id];
    this.newTask = taskToEdit.name;
    this.taskToModified = id;

    this.display = true;
    this.taskToModified = -1;

  }

  changeTaskStatus(task: TODOTask): void {

    let item: TODOTask = this.tasks.filter(x => x.name === task.name)[0];

    if (item.status == taskStatus.Todo) {
      item.status = taskStatus.inProgress;
    } else if (item.status == taskStatus.inProgress) {
      item.status = taskStatus.Done;
    }
  }

  close(): void {
    this.display = false;
    this.newTask = "";
    this.taskToModified = -1;
  }

}
