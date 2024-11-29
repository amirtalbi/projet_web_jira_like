import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from './project.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.scss'
})
export class CreateProjectComponent implements OnInit {
  projectForm!: FormGroup;

  constructor(private fb: FormBuilder, private projectService: ProjectService,private authService:AuthService) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.projectForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      tasks: [],
      ownerId: this.authService.getCurrentUserId(),
      members: [''],
    });
  }

  onSubmit(): void {
    if (this.projectForm.invalid) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    const formData = this.projectForm.value;

    formData.members = formData.members ? formData.members.split(',')?.map((member: string) => member.trim()) : [];

    this.projectService.createProject(formData).subscribe(
      (response) => {
        alert('Projet créé avec succès.');
        this.projectForm.reset();
      },
      (error) => {
        alert('Une erreur est survenue.');
      }
    );
  }
}
