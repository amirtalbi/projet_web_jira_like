import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Priority, Project, Task, TaskType } from '../models/task.model';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  public projects$: BehaviorSubject<Project[]>;

  public selectedProject$: BehaviorSubject<Project>;
  get selectedProject(): Project {
    return this.selectedProject$.getValue();
  }

  public userSelectedTask$: BehaviorSubject<Task[]>;
  get userSelectedTask(): Task[] {
    return this.userSelectedTask$.getValue();
  }

  public currentSelectedProject = null;
  public currentSelectedFilter = null;

  public Priority = Priority;
  public TaskType = TaskType;

  public searchTerm: string = '';

  private userId = 1; // replace it with userService

  public disabled$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor(private authService: AuthService) {
    this.projects$ = new BehaviorSubject<Project[]>([]);
    this.userSelectedTask$ = new BehaviorSubject<Task[]>([]);
    this.selectedProject$ = new BehaviorSubject<Project>(null);
  }

  ngOnInit(): void {
    console.log('HomeComponent',this.authService.isAuth);

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
          },
          {
            id: 2,
            type: TaskType.BugFix,
            title: 'sport',
            priority: Priority.Medium,
            assignedTo: 1,
          },
          {
            id: 3,
            type: TaskType.Update,
            title: 'meeting',
            priority: Priority.Low,
            assignedTo: 1,
          },
          {
            id: 4,
            type: TaskType.Update,
            title: 'meeting',
            priority: Priority.Low,
            assignedTo: 2,
          },
          {
            id: 5,
            type: TaskType.Update,
            title: 'meeting',
            priority: Priority.Low,
            assignedTo: 2,
          },
          {
            id: 1,
            type: TaskType.NewFeature,
            title: 'project',
            priority: Priority.High,
            assignedTo: 1,
          },
          {
            id: 2,
            type: TaskType.BugFix,
            title: 'sport',
            priority: Priority.Medium,
            assignedTo: 1,
          },
          {
            id: 3,
            type: TaskType.Update,
            title: 'meeting',
            priority: Priority.Low,
            assignedTo: 1,
          },
          {
            id: 1,
            type: TaskType.NewFeature,
            title: 'project',
            priority: Priority.High,
            assignedTo: 1,
          },
          {
            id: 2,
            type: TaskType.BugFix,
            title: 'sport',
            priority: Priority.Medium,
            assignedTo: 1,
          },
          {
            id: 3,
            type: TaskType.Update,
            title: 'meeting',
            priority: Priority.Low,
            assignedTo: 1,
          },
          {
            id: 1,
            type: TaskType.NewFeature,
            title: 'project',
            priority: Priority.High,
            assignedTo: 1,
          },
          {
            id: 2,
            type: TaskType.BugFix,
            title: 'sport',
            priority: Priority.Medium,
            assignedTo: 1,
          },
          {
            id: 3,
            type: TaskType.Update,
            title: 'meeting',
            priority: Priority.Low,
            assignedTo: 1,
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
          },
          {
            id: 5,
            type: TaskType.BugFix,
            title: 'Go to the gym',
            priority: Priority.Medium,
            assignedTo: 2,
          },
          {
            id: 6,
            type: TaskType.Update,
            title: 'Attend meeting',
            priority: Priority.Low,
            assignedTo: 2,
          },
        ],
      },
    ]);
  }

  public onProjectChange(id: any): void {
    if (!id) {
      this.reset();
      return;
    }
    this.disabled$.next(true);
    const selectedProject = this.projects$
      .getValue()
      .find((project) => project.id === id);
    const selectedTaskByUser = this.getTaskByUserId(selectedProject.tasks);
    this.selectedProject$.next(selectedProject);
    this.userSelectedTask$.next(selectedTaskByUser);
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

  public onFilterChange(filter: Priority | TaskType): void {
    const fullUserTaskList = this.getTaskByUserId(this.selectedProject.tasks);
    if (typeof filter === 'string') {
      this.filterTasksByType(fullUserTaskList, filter);
    } else if (typeof filter === 'number') {
      this.filterTasksByPriority(fullUserTaskList, filter);
    } else {
      this.userSelectedTask$.next(fullUserTaskList);
    }
  }

  private filterTasksByPriority(tasks: Task[], priority: Priority): void {
    this.userSelectedTask$.next(
      tasks.filter((task) => task.priority === priority)
    );
  }

  private filterTasksByType(tasks: Task[], type: TaskType): void {
    this.userSelectedTask$.next(tasks.filter((task) => task.type === type));
  }

  private getTaskByUserId(tasks: Task[]): Task[] {
    return tasks.filter((task) => task.assignedTo === this.userId);
  }

  private reset(): void {
    this.disabled$.next(false);
    this.selectedProject$.next(null);
    this.userSelectedTask$.next([]);
    this.currentSelectedProject = null;
    this.currentSelectedFilter = null;
    this.searchTerm = '';
  }
}
