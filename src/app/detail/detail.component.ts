
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../services/students.service';
import { Student } from '../services/student.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']

})

export class DetailComponent implements OnInit {
  studentList: Student[];
  student: Student;
  constructor(private studentService: StudentsService, private route: ActivatedRoute) { }

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
}
