import { ActivatedRoute } from '@angular/router';
import { Student } from './../services/student.model';
import { ToastrService } from 'ngx-toastr';
import { StudentsService } from './../services/students.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css'],
  providers: [ StudentsService ]
})
export class UpdatestudentComponent implements OnInit {
  studentList: Student[];
  student: Student;

  constructor(private studentService: StudentsService, private route: ActivatedRoute ,private tostr: ToastrService) { }

  ngOnInit() {
       
    let key = this.route.snapshot.paramMap.get("$key");

    var datas = this.studentService.getData();
    datas.snapshotChanges().subscribe(item => {
      this.studentList = [];
      item.forEach(element => {
        var data = element.payload.toJSON();
        data["$key"] = element.key;
        this.studentList.push(data as Student);      
      });    
      for(let i = 0; i < this.studentList.length ; i++){
        if(key == this.studentList[i].$key){
          this.student = this.studentList[i];
          break;
        }
      }
      console.log(this.student.english_name);
    });
    console.log(key);
  }
  updateStudent(studentForm: NgForm) {
    this.studentService.updateStudent(studentForm.value);
    this.resetForm(studentForm);
    this.tostr.success('Updated Succcessfully', 'Employee Register');
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
