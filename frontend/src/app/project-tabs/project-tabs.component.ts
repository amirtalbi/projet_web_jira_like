import { Component, ViewEncapsulation } from '@angular/core';
import { Priority, TaskStatus, TaskType } from '../models/task.model';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-project-tabs',
  templateUrl: './project-tabs.component.html',
  styleUrl: './project-tabs.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ProjectTabsComponent {
  public TaskStatus = TaskStatus;

  constructor(public taskService: TaskService) {}

  public getIconByTaskType(type: TaskType): string {
    return this.taskService.getIconByTaskType(type);
  }

  public getIconByPriority(priority: Priority): string {
    return this.taskService.getIconByPriority(priority);
  }
}
