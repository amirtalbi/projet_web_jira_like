import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  Priority,
  Project,
  Task,
  TaskStatus,
  TaskType,
} from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  public projects$: BehaviorSubject<Project[]>;

  public selectedProject$: BehaviorSubject<Project>;
  get selectedProject(): Project {
    return this.selectedProject$.getValue();
  }

  public userSelectedTask$: BehaviorSubject<Task[]>;
  get userSelectedTask(): Task[] {
    return this.userSelectedTask$.getValue();
  }

  constructor() {
    this.projects$ = new BehaviorSubject<Project[]>([]);
    this.userSelectedTask$ = new BehaviorSubject<Task[]>([]);
    this.selectedProject$ = new BehaviorSubject<Project>(null);

    // use service
    this.projects$.next([
      {
        id: 1,
        name: 'Project 1',
        tasks: [
          {
            id: 1,
            type: TaskType.NewFeature,
            title: 'project',
            priority: Priority.High,
            assignedTo: 1,
            status: TaskStatus.ToDo,
          },
          {
            id: 2,
            type: TaskType.BugFix,
            title: 'sport',
            priority: Priority.Medium,
            assignedTo: 1,
            status: TaskStatus.InProgress,
          },
          {
            id: 3,
            type: TaskType.Update,
            title: 'meeting',
            priority: Priority.Low,
            assignedTo: 1,
            status: TaskStatus.Done,
          },
          {
            id: 4,
            type: TaskType.Update,
            title: 'meeting',
            priority: Priority.Low,
            assignedTo: 2,
            status: TaskStatus.ToDo,
          },
          {
            id: 5,
            type: TaskType.Update,
            title: 'meeting',
            priority: Priority.Low,
            assignedTo: 2,
            status: TaskStatus.InProgress,
          },
          {
            id: 1,
            type: TaskType.NewFeature,
            title: 'project',
            priority: Priority.High,
            assignedTo: 1,
            status: TaskStatus.ToDo,
          },
          {
            id: 2,
            type: TaskType.BugFix,
            title: 'sport',
            priority: Priority.Medium,
            assignedTo: 1,
            status: TaskStatus.InProgress,
          },
          {
            id: 3,
            type: TaskType.Update,
            title: 'meeting',
            priority: Priority.Low,
            assignedTo: 1,
            status: TaskStatus.Done,
          },
          {
            id: 1,
            type: TaskType.NewFeature,
            title: 'project',
            priority: Priority.High,
            assignedTo: 1,
            status: TaskStatus.ToDo,
          },
          {
            id: 2,
            type: TaskType.BugFix,
            title: 'sport',
            priority: Priority.Medium,
            assignedTo: 1,
            status: TaskStatus.InProgress,
          },
          {
            id: 3,
            type: TaskType.Update,
            title: 'meeting',
            priority: Priority.Low,
            assignedTo: 1,
            status: TaskStatus.Done,
          },
          {
            id: 1,
            type: TaskType.NewFeature,
            title: 'project',
            priority: Priority.High,
            assignedTo: 1,
            status: TaskStatus.ToDo,
          },
          {
            id: 2,
            type: TaskType.BugFix,
            title: 'sport',
            priority: Priority.Medium,
            assignedTo: 1,
            status: TaskStatus.InProgress,
          },
          {
            id: 3,
            type: TaskType.Update,
            title: 'meeting',
            priority: Priority.Low,
            assignedTo: 1,
            status: TaskStatus.Done,
          },
        ],
      },
      {
        id: 2,
        name: 'Project 2',
        tasks: [
          {
            id: 4,
            type: TaskType.NewFeature,
            title: 'Work on the project',
            priority: Priority.High,
            assignedTo: 1,
            status: TaskStatus.ToDo,
          },
          {
            id: 5,
            type: TaskType.BugFix,
            title: 'Go to the gym',
            priority: Priority.Medium,
            assignedTo: 2,
            status: TaskStatus.InProgress,
          },
          {
            id: 6,
            type: TaskType.Update,
            title: 'Attend meeting',
            priority: Priority.Low,
            assignedTo: 2,
            status: TaskStatus.Done,
          },
        ],
      },
    ]);
  }

  public getSelectedTaskByStatus(status: TaskStatus): Task[] {
    if (!this.selectedProject) {
      return [];
    } else {
      return this.selectedProject.tasks.filter(
        (task) => task.status === status
      );
    }
  }

  public getIconByTaskType(type: TaskType): string {
    switch (type) {
      case TaskType.NewFeature:
        return 'plus-square';
      case TaskType.BugFix:
        return 'bug';
      case TaskType.Update:
        return 'reload';
    }
  }

  public getIconByPriority(priority: Priority): string {
    switch (priority) {
      case Priority.High:
        return 'icons:icon-high-priority';
      case Priority.Medium:
        return 'icons:icon-medium-priority';
      case Priority.Low:
        return 'icons:icon-low-priority';
    }
  }
}
