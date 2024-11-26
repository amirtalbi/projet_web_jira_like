export interface Project {
  id: number;
  name: string;
  tasks: Task[];
}

export interface Task {
  id: number;
  type: TaskType;
  title: string;
  priority: Priority;
  assignedTo: number;
}

export enum TaskType {
  NewFeature = 'New Feature',
  BugFix = 'Bug Fix',
  Update = 'Update',
}

export enum Priority {
  High,
  Medium,
  Low,
}
