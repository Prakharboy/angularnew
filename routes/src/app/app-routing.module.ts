import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import  {DepartmentComponent} from './department/department.component';
import {RoneComponent} from './rone/rone.component'
import{DepartmentDetailComponent} from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';



const routes: Routes = [
  {path:'',redirectTo:'/departmentss',pathMatch:'full'},
  {path:'departmentss', component:DepartmentComponent},
  {path:'departmentss/:id',component:DepartmentDetailComponent,children:[

    {path:'overview',component:DepartmentOverviewComponent},
    {path:'contact',component:DepartmentContactComponent}
  ]},
  {path:'employeess', component:EmployeeComponent},
  {path:'**',component:RoneComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
