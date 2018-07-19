import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InterviewsService } from '../services/interviews.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent implements OnInit {

  constructor(private interviewService: InterviewsService, private tostr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(interviewForm: NgForm) {
    if (interviewForm.value.$key == null)
      this.interviewService.insertInterview(interviewForm.value);
      // this.tostr.success('Submitted Succcessfully', 'Employee Register');
      this.tostr.success('Submitted Succcessfully', 'Interview Register');
      this.resetForm(interviewForm);
  }

  resetForm(interviewForm?: NgForm) {
    if (interviewForm != null)
    interviewForm.reset();
    this.interviewService.selectedInterview = {
      $key: null,
      student_name: null,
      interview_date: null,
      interview_type: null,
      company_name: null,
      status: null,
      job_history: null,
      certificate: null
    }
  }


}
