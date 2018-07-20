import { Injectable } from '@angular/core';
import { Experiences } from './experiences.model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ExperiencesService {
  experienceList: AngularFireList<any>;
  selectedExperience: Experiences = new Experiences();
  constructor(private firebase: AngularFireDatabase) { }

  getData(){
    this.experienceList = this.firebase.list('experience');
    return this.experienceList;
  }
  
  insertExperience(experience: Experiences){
    this.experienceList = this.firebase.list('experience');
    this.experienceList.push({
      student_name: experience.student_name,
      start_date: experience.start_date,
      leave_date: experience.leave_date,
      company_name: experience.company_name,
      position: experience.position
    });
  }
  updateExperience(experience: Experiences){
    this.experienceList.update(experience.$key, {
      student_name: experience.student_name,      
      start_date: experience.start_date,
      leave_date: experience.leave_date,
      company_name: experience.company_name,
      position: experience.position
    });
  }

  deleteExperience($key: string){
    this.experienceList.remove($key);
  }
}
