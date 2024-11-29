export interface Project {
  id: number;
  name: string;
  tasks: Task[];
  description?: string;
  ownerId?: string;
  members?: string[];
  createdAt?: string;
  updatedAt?: string;
}

export interface Task {
  id: number;
  type: TaskType;
  title: string;
  priority: Priority;
  assignedTo: string;
  status: TaskStatus;
  description?: string;
  dueDate?: string;
  tags?: string[];
  projectId?: string;
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

export enum TaskStatus {
  ToDo,
  InProgress,
  Done,
}
