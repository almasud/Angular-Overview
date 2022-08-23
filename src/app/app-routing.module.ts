import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppConstant } from './util/app_constants';

const routes: Routes = [
  {path: '', redirectTo: AppConstant.ROUTE_DEPARTMENTS, pathMatch: 'full'},
  {path: AppConstant.ROUTE_DEPARTMENTS, component: DepartmentListComponent},
  {path: AppConstant.ROUTE_DEPARTMENTS + '/:id', component: DepartmentDetailsComponent},
  {path: AppConstant.ROUTE_EMPLOYESS, component: EmployeeListComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  DepartmentListComponent,
  DepartmentDetailsComponent, 
  EmployeeListComponent,
  PageNotFoundComponent
];
