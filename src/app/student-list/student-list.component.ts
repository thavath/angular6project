import { StudentsService } from './../services/students.service';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Student } from '../services/student.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  providers: [ StudentsService ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentListComponent implements OnInit, OnDestroy {
  studentList: Student[];
  searchStudent: Student[];
  displaySearch: Boolean = true;
  search: string = "";
  display: Boolean = false;
  private subscription: Subscription;

  constructor(
    private studentService: StudentsService, 
    private tostr: ToastrService, 
    private route: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    // getData and convert json to Student object
    const datas = this.studentService.getData();
    this.subscription = datas.snapshotChanges().subscribe(item => {
      this.studentList = [];
      item.forEach(element => {
        const data = element.payload.toJSON();
        data["$key"] = element.key;
        this.studentList.push(data as Student);        
      });
      this.cdr.markForCheck(); // Trigger change detection for OnPush
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  onSearch() {
    if (!this.search.trim()) {
      this.displaySearch = true;
      this.display = false;
      this.cdr.markForCheck();
      return;
    }

    this.displaySearch = false;
    const searchTerm = this.search.toLowerCase().trim();
    
    // Optimized search with case-insensitive partial matching
    this.searchStudent = this.studentList.filter(student => 
      student.english_name?.toLowerCase().includes(searchTerm) ||
      student.japanese_level?.toLowerCase().includes(searchTerm) ||
      student.sending_company?.toLowerCase().includes(searchTerm)
    );
    
    this.display = this.searchStudent.length > 0;
    this.cdr.markForCheck(); // Trigger change detection for OnPush
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
