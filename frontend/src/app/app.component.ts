import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from './models/task.model';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Jirar';
  showNavbar = true;

  constructor(
    private readonly router: Router,
    public taskService: TaskService
  ) {
    router.events.subscribe((val) => {
      if (router.url.includes('auth')) {
        this.showNavbar = false;
      }
    });
  }

  public updateSelectedProject(project: Project): void {
    this.taskService.selectedProject = project;
    this.taskService.projectTaskFiltered = project;
  }
}
