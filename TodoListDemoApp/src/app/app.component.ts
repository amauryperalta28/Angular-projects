import { Component } from '@angular/core';
import { TODOTask, taskStatus } from './tasks/interfaces/tasks-interfaces.interface';

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

    if(this.newTask ==="" || this.newTask == undefined){
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

  edit(id: number) {

    const taskToEdit = this.tasks[id];
    this.newTask = taskToEdit.name;
    this.taskToModified = id;

    this.display = true;

  }

  close() {
    this.display = false;
    this.newTask = "";
  }

}
