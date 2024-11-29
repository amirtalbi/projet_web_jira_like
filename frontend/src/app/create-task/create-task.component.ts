import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Priority, Task, TaskStatus, TaskType } from '../models/task.model';
import { AuthService } from '../auth/auth.service';
import { ProjectService } from '../create-project/project.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss'
})
export class CreateTaskComponent {
  tagsString: string;
  task: Task = {
    id: 0,
    title: '',
    description: '',
    projectId: '',
    assignedTo: '',
    type: TaskType.NewFeature,
    tags: [] as string[],
    priority: Priority.Medium,
    status: TaskStatus.ToDo,
    dueDate: ''
  };

  constructor(private taskService: TaskService, private authService: AuthService, private projectService: ProjectService) {
    if (this.projectService.getSelectedProject()) {
      this.task.projectId = this.projectService.getSelectedProject().name;
    }else {
      alert('Veuillez sélectionner un projet.');
    }
  }

  assignToMe(): void { 
    this.task.assignedTo = this.authService.getCurrentUserId();
  }
  clearAssignation() {
    this.task.assignedTo = '';
  }
  setStatus(status: string): void {
    this.task.status = status as unknown as TaskStatus;
  }

  updateTags(): void {
    this.task.tags = this.task.tags.join(',')
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag !== '');
  }

  submit(): void {
    if (!this.task.title || !this.task.projectId) {
      console.log(this.task, this.task.title, this.task.projectId);
      alert('Veuillez remplir les champs obligatoires.');
      return;
    }

    this.taskService.createTask(this.task).subscribe({
      next: (response) => {
        alert('Tâche créée avec succès !');
        console.log(response);
      },
      error: (error) => {
        alert('Erreur lors de la création de la tâche.');
        console.error(error);
      }
    });
  }
}
