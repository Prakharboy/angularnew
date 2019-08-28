import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoneComponent } from './rone/rone.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';


@NgModule({
  declarations: [
    AppComponent,
    RoneComponent,
    DepartmentComponent,
    EmployeeComponent,
    DepartmentDetailComponent,
    DepartmentContactComponent,
    DepartmentOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
