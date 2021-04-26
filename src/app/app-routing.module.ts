import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./shared/guard/auth.guard";
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { StudentidsforcourseComponent } from './studentidsforcourse/studentidsforcourse.component';
import { HomepageComponent } from './Components/homepage/homepage.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent, canActivate: [AuthGuard]},
  { path: 'studentIDsforCourse', component: StudentidsforcourseComponent, canActivate: [AuthGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
