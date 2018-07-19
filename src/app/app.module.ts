import { StudentsService } from './services/students.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { FujiyamaComponent } from './fujiyama/fujiyama.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { AsideComponent } from './layout/aside/aside.component';
import { ArticleComponent } from './layout/article/article.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { RouterModule, Routes} from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './authetication/login/login.component';
import { SingupComponent } from './authetication/singup/singup.component';
import { ToastrModule } from 'ngx-toastr';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { AttendencesListComponent } from './attendences-list/attendences-list.component';
import { InterviewComponent } from './interview/interview.component';
import { InterviewListComponent } from './interview-list/interview-list.component';

const forRoutes: Routes = [
  { path : 'fujiyama', component: FujiyamaComponent },
  { path : 'home', component: HomeComponent },
  { path : 'signin', component: LoginComponent },
  { path : 'signup', component: SingupComponent },
  { path : 'student', component: StudentListComponent },
  { path : 'student-list', component: StudentListComponent },
  { path : 'interview', component: InterviewComponent },
  { path : 'interview-list', component: InterviewListComponent },
  { path : 'attendance', component: AttendenceComponent },
  { path : 'attendances-list', component: AttendencesListComponent },
  { path : 'student/detail/:$key', component: DetailComponent },
  { path : 'student/edit/:$key', component: UpdatestudentComponent },
  { path : '', component: HomeComponent },
  { path: '**', component: LoginComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    StudentListComponent,
    StudentRegistrationComponent,
    FujiyamaComponent,
    AttendenceComponent,
    AsideComponent,
    ArticleComponent,
    DetailComponent,
    HomeComponent,
    LoginComponent,
    SingupComponent,
    UpdatestudentComponent,
    AttendencesListComponent,
    InterviewComponent,
    InterviewListComponent
  ],
  imports: [
    ToastrModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    FormsModule,
    RouterModule.forRoot(forRoutes),
    MatCheckboxModule
  ],
  providers: [ StudentsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }