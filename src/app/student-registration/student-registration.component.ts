import { ToastrService } from 'ngx-toastr';
import { StudentsService } from './../services/students.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from '../services/student.model';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css'],
  providers: [ StudentsService ]
})
export class StudentRegistrationComponent implements OnInit {

  constructor(private studentService: StudentsService, private tostr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(studentForm: NgForm) {
    if (studentForm.value.$key == null)
      this.studentService.insertStudent(studentForm.value);
    else
      this.studentService.updateStudent(studentForm.value);
    this.resetForm(studentForm);
    this.tostr.success('Submitted Succcessfully', 'Employee Register');
  }
  resetForm(studentForm?: NgForm) {
    if (studentForm != null)
      studentForm.reset();
    this.studentService.selectedStudent = {
      $key: null,
      id: null,
      english_name: null,
      khmer_name: null,
      japanese_name: null,
      nationality: null,
      place_of_birth: null,
      card_id: null,
      khmer_salary: null,
      education: null,
      date_of_birth: null,
      age: null,
      gender: null,
      state: null,
      blood_type: null,
      vision: null,
      interest: null,
      year_of_experience: null,
      married: null,
      position: null,
      behavior: null,
      went_to_japan: null,
      japanese_conversation: null,
      height: null,
      weight: null,
      current_address: null,
      reason: null,
      arrang_money: null,
      sending_company: null,
      japanese_level: null,
      field_of_work: null,
      date_to_japan: null,
      prefecture: null,
      zip_code: null,
      address_in_japan: null,
      grammer_level: null,
      idiom_level: null,
      conversation_level: null,
      life_attitude: null,
      course_type: null,
      last_peroid_of_study: null,
      university_name: null,
      subject_name: null,
      teacher_name: null,
      book_type: null,
      start_date: null,
      end_date: null,
      status: null,
      description: null,
  
      admin_name: null,
      email_address: null,
      phone_number: null
    }
  }
}
