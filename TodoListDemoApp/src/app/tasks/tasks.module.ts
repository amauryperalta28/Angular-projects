import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { TaskStatusPipe } from './task-status.pipe';



@NgModule({
  declarations: [
    TaskListComponent,
    TaskStatusPipe
  ],
  exports:[
    TaskListComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class TasksModule { }
