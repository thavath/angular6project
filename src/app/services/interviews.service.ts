import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Interview } from './interview.model';

@Injectable({
  providedIn: 'root'
})
export class InterviewsService {
  interviewList: AngularFireList<any>;
  selectedInterview: Interview = new Interview();
  constructor(private firebase: AngularFireDatabase) { }

  getData(){
    this.interviewList = this.firebase.list('interviews');
    return this.interviewList;
  }
  
  insertInterview(interview: Interview){
    this.interviewList = this.firebase.list('interviews');
    this.interviewList.push({
      student_name: interview.student_name,
      interview_date: interview.interview_date,
      interview_type: interview.interview_type,
      company_name: interview.company_name,
      status: interview.status,
      job_history: interview.job_history,
      certificate: interview.certificate
    });
  }
  updateInterview(interview: Interview){
    this.interviewList.update(interview.$key, {
      student_name: interview.student_name,
      interview_date: interview.interview_date,
      interview_type: interview.interview_type,
      company_name: interview.company_name,
      status: interview.status,
      job_history: interview.job_history,
      certificate: interview.certificate
    });
  }

  deleteInterview($key: string){
    this.interviewList.remove($key);
  }
}
