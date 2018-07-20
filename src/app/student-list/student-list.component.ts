import { StudentsService } from './../services/students.service';
import { Component, OnInit } from '@angular/core';
import { Student } from '../services/student.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  providers: [ StudentsService ]
})
export class StudentListComponent implements OnInit {
  studentList: Student[];

  searchStudent: Student[];
  displaySearch: Boolean = true;
  search: string = "";
  display: Boolean = false;

 
  constructor(private studentService: StudentsService, private tostr: ToastrService ,private route: Router) { }

  ngOnInit() {
    //getData and convert json to Student object
    var datas = this.studentService.getData();
    datas.snapshotChanges().subscribe(item => {
      this.studentList = [];
      item.forEach(element => {
        var data = element.payload.toJSON();
        data["$key"] = element.key;
        this.studentList.push(data as Student);        
      });
    });
  }
  onSearch(){
    this.displaySearch = false;
    this.searchStudent = [];
    this.studentList.forEach(element => {
      if (this.search == element.english_name || this.search == element.japanese_level || this.search == element.sending_company){
        this.searchStudent.push(element); 
      }
    });
    if(this.searchStudent.length <= 0 && this.search == ""){
      // this.displaySearch = false;
      this.displaySearch = true;
      console.log("Search not found..");
    }
    if(this.searchStudent.length > 0 ){  
      this.searchStudent.forEach(item => {
        console.log(item.english_name);
        console.log(item.japanese_level);
        console.log(item.sending_company);
        console.log(item.phone_number);
        this.display = true;
      });
    }
  }
  onUpdate(stu){
    this.route.navigate(['/student/edit', stu.$key]);
  }
  onSelect(student){
    this.route.navigate(['/student/detail', student.$key]);
  }
  onDelete(key : string){
    if(confirm("Are you sure to delete this student?") == true){
      this.studentService.deleteStudent(key);
      this.tostr.warning("Successfully deleted student","students registeration.")
    }
  }

}
