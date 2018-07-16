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
