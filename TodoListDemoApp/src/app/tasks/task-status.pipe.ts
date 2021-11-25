import { Pipe, PipeTransform } from '@angular/core';
import { taskStatus } from './interfaces/tasks-interfaces.interface';

@Pipe({
  name: 'taskStatus'
})
export class TaskStatusPipe implements PipeTransform {

  transform(value: number): string {
    const map:Map<number,string> = new Map([
      [0, "To do"],
      [1, "In progress"],
      [2, "Done"],
  ]);

     const result: string = map.get(value)?? "";

    return result;
  }

}
