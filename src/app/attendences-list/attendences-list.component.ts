import { Component, OnInit } from '@angular/core';
import { AttendenceService } from '../services/attendence.service';
import { ToastrService } from 'ngx-toastr';
import { Attendence } from '../services/attendence.model';

@Component({
  selector: 'app-attendences-list',
  templateUrl: './attendences-list.component.html',
  styleUrls: ['./attendences-list.component.css'],
  providers: [ AttendenceService ]
})

export class AttendencesListComponent implements OnInit {
  
  attendenceList: Attendence[];
  editState: boolean = false;
  itemToEdit: Attendence;

  constructor(private attendenceService: AttendenceService, private tostr : ToastrService) { }

  ngOnInit() {
    var x = this.attendenceService.getData();
    x.snapshotChanges().subscribe(item => {
      this.attendenceList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.attendenceList.push(y as Attendence);
      });
    });
  }

  onEdit(attendence: Attendence) {
    this.attendenceService.selectedAttendence = Object.assign({}, attendence);
    this.editState = true;
    this.itemToEdit = attendence;
  }

  clearState(){
    this.editState = false;
    this.itemToEdit = null;
  }
  onDelete(key: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.attendenceService.deleteAttendence(key);
      this.tostr.warning("Deleted Successfully", "Employee register");
    }
  }
  onUpdate(attendence: Attendence){
    this.attendenceService.updateAttendence(attendence);
    this.editState = false;
    this.itemToEdit = null;
  }
}
