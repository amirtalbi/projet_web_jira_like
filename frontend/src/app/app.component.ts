import { Component, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { CreateTaskComponent } from './create-task/create-task.component';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Jirar';
  showNavbar = true;
  isModalVisible = false;

  constructor(private readonly router: Router,    private modal: NzModalService,
    private viewContainerRef: ViewContainerRef) {
    router.events.subscribe((val) => {
      if (router.url.includes('auth')) {
        this.showNavbar = false;
      }
    });
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
      nzFooter: null
    });
  }
}
