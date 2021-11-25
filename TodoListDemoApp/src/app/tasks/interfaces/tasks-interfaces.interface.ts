export enum taskStatus{
  Todo, inProgress, Done
}

export interface TODOTask{
  name: string;
  status: taskStatus;
}
