import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Attendence } from './attendence.model';

@Injectable()
export class AttendenceService {
  attendenceList: AngularFireList<any>;
  selectedAttendence: Attendence = new Attendence();
  constructor(private firebase: AngularFireDatabase) { }

  getData(){
    this.attendenceList = this.firebase.list('attendences');
    return this.attendenceList;
  }
  
  insertAttendence(attendence: Attendence){
    this.attendenceList = this.firebase.list('attendences');
    this.attendenceList.push({
      student_name: attendence.student_name,
      study_date: attendence.study_date,
      status: attendence.status,
      description: attendence.description,
    });
  }
  updateAttendence(attendence: Attendence){
    this.attendenceList.update(attendence.$key, {
      student_name: attendence.student_name,
      study_date: attendence.study_date,
      status: attendence.status,
      description: attendence.description,
    });
  }

  deleteAttendence($key: string){
    this.attendenceList.remove($key);
  }
}
