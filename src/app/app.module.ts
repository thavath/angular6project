import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
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

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { RouterModule, Routes} from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './authetication/login/login.component';
import { SingupComponent } from './authetication/singup/singup.component';
const forRoutes: Routes = [
  { path : 'fujiyama', component: FujiyamaComponent },
  { path : 'home', component: HomeComponent },
  { path : 'signin', component: LoginComponent },
  { path : 'signup', component: SingupComponent },
  { path : 'student', component: StudentListComponent },
  { path : 'attendance', component: AttendenceComponent },
  { path : 'student/:id/detail', component: DetailComponent },
  { path : ' ', component: AppComponent }
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
    SingupComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    FormsModule,
    RouterModule.forRoot(forRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }