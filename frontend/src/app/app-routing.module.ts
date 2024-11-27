import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { ProjectTabsComponent } from './project-tabs/project-tabs.component';

const routes: Routes = [
  { path: 'auth/login', component: AuthComponent },
  { path: 'auth/register', component: AuthComponent },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'tabs', component: ProjectTabsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
