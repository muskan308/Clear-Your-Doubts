import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ByTeacherComponent } from './components/by-teacher/by-teacher.component';
import { BySubjectComponent } from './components/by-subject/by-subject.component';

const routes: Routes = [
  {path : '', redirectTo : "/login", pathMatch : 'full'},
  {
    path:'home',
    component:HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'byTeacher/:id',
    component: ByTeacherComponent
  },
  {
    path: 'bySubject/:id',
    component: BySubjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
