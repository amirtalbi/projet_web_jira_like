import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Project } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private apiUrl = 'http://localhost:3000/projects';
  private selectedProject: Project;
  private token: string;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.token = this.authService.getToken();
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
  }

  setSelectedProject(project: Project): void {
    this.selectedProject = project;
  }

  getSelectedProject(): Project {
    return this.selectedProject;
  }

  getProjects(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, { headers: this.getHeaders() });
  }

  getProjectById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }

  createProject(project: { name: string; description: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, project, { headers: this.getHeaders() });
  }

  updateProject(id: string, project: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, project, { headers: this.getHeaders() });
  }

  deleteProject(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }
}
