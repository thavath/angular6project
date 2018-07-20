import { Component, OnInit } from '@angular/core';
import { Interview } from '../services/interview.model';
import { InterviewsService } from '../services/interviews.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-interview-list',
  templateUrl: './interview-list.component.html',
  styleUrls: ['./interview-list.component.css'],
  providers: [ InterviewsService ]
})
export class InterviewListComponent implements OnInit {
  interviewList: Interview[];
  editState: boolean = false;
  itemToEdit: Interview;
  
  searchInterview: Interview[];
  private displaySearch: Boolean = true;
  private search: string = "";
  private display: Boolean = false;

  constructor(private interviewService: InterviewsService, private tostr : ToastrService) { }
  ngOnInit() {
    var x = this.interviewService.getData();
    x.snapshotChanges().subscribe(item => {
      this.interviewList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.interviewList.push(y as Interview);
      });
    });
  }

  onSearch(){
    this.displaySearch = false;
    this.searchInterview = [];
    this.interviewList.forEach(element => {
      if (this.search == element.student_name){
        this.searchInterview.push(element); 
      }
    });
    if(this.searchInterview.length <= 0 && this.search == ""){
      // this.displaySearch = false;
      this.displaySearch = true;
      console.log("Search not found..");
    }
    if(this.searchInterview.length > 0 ){  
      this.searchInterview.forEach(item => {
        console.log(item.company_name);
        console.log(item.status);
        this.display = true;
      });
    }
  }

  onEdit(interview: Interview) {
    this.interviewService.selectedInterview = Object.assign({}, interview);
    this.editState = true;
    this.itemToEdit = interview;
  }

  clearState(){
    this.editState = false;
    this.itemToEdit = null;
  }
  onDelete(key: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.interviewService.deleteInterview(key);
      this.tostr.warning("Deleted Successfully", "Interview List");
    }
  }
  onUpdate(interview: Interview){
    this.interviewService.updateInterview(interview);
    this.editState = false;
    this.itemToEdit = null;
  }
}
