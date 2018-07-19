import { Component, OnInit } from '@angular/core';
import { AttendenceService } from '../services/attendence.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
// import { Attendence } from '../services/attendence.model';

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.css'],
  providers: [ AttendenceService ]
})
export class AttendenceComponent implements OnInit {

  constructor(private attendenceService: AttendenceService, private tostr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(attendenceForm: NgForm) {
    if (attendenceForm.value.$key == null)
      this.attendenceService.insertAttendence(attendenceForm.value);
      // this.tostr.success('Submitted Succcessfully', 'Employee Register');
      this.tostr.success('Submitted Succcessfully', 'Employee Register');
      this.resetForm(attendenceForm);
  }

  resetForm(attendenceForm?: NgForm) {
    if (attendenceForm != null)
    attendenceForm.reset();
    this.attendenceService.selectedAttendence = {
      $key: null,
      student_name: null,
      study_date: null,
      status: null,
      description: null
    }
  }
}
