import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { StudentListComponent } from '../student-list/student-list.component';
import { StudentRegistrationComponent } from '../student-registration/student-registration.component';
import { DetailComponent } from '../detail/detail.component';
import { UpdatestudentComponent } from '../updatestudent/updatestudent.component';
import { StudentsService } from '../services/students.service';

const routes: Routes = [
  { path: 'list', component: StudentListComponent },
  { path: 'register', component: StudentRegistrationComponent },
  { path: 'detail/:$key', component: DetailComponent },
  { path: 'edit/:$key', component: UpdatestudentComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    // Components will be moved here during refactoring
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [StudentsService]
})
export class StudentsModule { }