import { Component, EventEmitter, Input, Output } from '@angular/core';
import { taskStatus, TODOTask } from '../interfaces/tasks-interfaces.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  @Input() tasks: TODOTask[] = [];
  @Output() onDeleteTask: EventEmitter<number> = new EventEmitter<number>();
  @Output() onEditTask: EventEmitter<number> = new EventEmitter<number>();
  @Output() onUpdateTaskStatus: EventEmitter<TODOTask> = new EventEmitter<TODOTask>();


  getStatusClass(status: taskStatus): string {
    switch (status) {
      case taskStatus.Todo:
        return 'p-button-secondary';
      case taskStatus.inProgress:
        return 'p-button-warning';
      case taskStatus.Done:
        return 'p-button-success';

    }
  }

  delete(id: number): void {
    this.onDeleteTask.emit(id);
  }

  edit(id: number): void {
    this.onEditTask.emit(id);
  }

  updateStatus(task: TODOTask): void {
    this.onUpdateTaskStatus.emit(task);
  }


}
