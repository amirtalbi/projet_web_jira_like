import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { CreateTaskComponent } from './create-task/create-task.component';
import { Project } from './models/task.model';
import { TaskService } from './services/task.service';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ProjectService } from './create-project/project.service';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Jirar';
  showNavbar = true;
  isModalVisible = false;
  projectList: Project[] = [];

  constructor(
    private readonly router: Router,
    private modal: NzModalService,
    private viewContainerRef: ViewContainerRef,
    public taskService: TaskService,
    private projectService: ProjectService,
    private authService: AuthService
  ) {
    router.events.subscribe((val) => {
      if (router.url.includes('login') || router.url.includes('register')) {
        this.showNavbar = false;
      } else {
        this.showNavbar = true;
      }
    });
  }

  ngOnInit() {
    if(this.authService.isAuth) {
      this.getProjects();
    }
  }

  public updateSelectedProject(project: Project): void {
    this.projectService.setSelectedProject(project);
  }

  showModal(): void {
    this.isModalVisible = true;
  }

  handleOk(): void {
    this.isModalVisible = false;
  }

  handleCancel(): void {
    this.isModalVisible = false;
  }

  createComponentModal(): void {
    const modal = this.modal.create<CreateTaskComponent>({
      nzContent: CreateTaskComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzWidth: '80%',
      nzFooter: null,
    });
  }
  
  createProjectComponentModal(): void {
    const modal = this.modal.create<CreateProjectComponent>({
      nzContent: CreateProjectComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzWidth: '80%',
      nzFooter: null,
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  getProjects() {
    this.projectService.getProjects().subscribe((projects:Project[]) => {
      this.projectList = projects;
    });
  }
}
