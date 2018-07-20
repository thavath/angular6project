import { Component, OnInit } from '@angular/core';
import { Family } from '../services/family.model';
import { FamilyService } from '../services/family.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-family-list',
  templateUrl: './family-list.component.html',
  styleUrls: ['./family-list.component.css'],
  providers: [ FamilyService ]
})
export class FamilyListComponent implements OnInit {

  familyList: Family[];
  editState: boolean = false;
  itemToEdit: Family;
  
  private searchFamily: Family[];
  private displaySearch: Boolean = true;
  private search: string = "";
  private display: Boolean = false;

  constructor(private familyService: FamilyService, private tostr : ToastrService) { }
  ngOnInit() {
    var x = this.familyService.getData();
    x.snapshotChanges().subscribe(item => {
      this.familyList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.familyList.push(y as Family);
      });
    });
  }

  onSearch(){
    this.displaySearch = false;
    this.searchFamily = [];
    this.familyList.forEach(element => {
    if (this.search == element.student_name){
        this.searchFamily.push(element); 
      }
    });
    if(this.searchFamily.length <= 0 && this.search == ""){
      // this.displaySearch = false;
      this.displaySearch = true;
      console.log("Search not found..");
    }
    if(this.searchFamily.length > 0 ){
      this.display = true ; 
      this.searchFamily.forEach(item => {
        console.log(item.student_name);
        console.log(item.name);
        console.log(item.position);
        console.log(item.status); 
        this.display = true;
      });
    }
  }

  onEdit(family: Family) {
    this.familyService.selectedFamily = Object.assign({}, family);
    this.editState = true;
    this.itemToEdit = family;
  }

  clearState(){
    this.editState = false;
    this.itemToEdit = null;
  }
  onDelete(key: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.familyService.deleteFamily(key);
      this.tostr.warning("Deleted Successfully", "Family List");
    }
  }
  onUpdate(family: Family){
    this.familyService.updateFamily(family);
    this.editState = false;
    this.itemToEdit = null;
  }
}
