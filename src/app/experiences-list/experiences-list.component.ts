import { Component, OnInit } from '@angular/core';
import { Experiences } from '../services/experiences.model';
import { ExperiencesService } from '../services/experiences.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-experiences-list',
  templateUrl: './experiences-list.component.html',
  styleUrls: ['./experiences-list.component.css'],
  providers: [ ExperiencesService ]
})
export class ExperiencesListComponent implements OnInit {

  experienceList: Experiences[];
  editState: boolean = false;
  itemToEdit: Experiences;

  searchExperience: Experiences[];
  private displaySearch: Boolean = true;
  private search: string = "";
  private display: Boolean = false;

  constructor(private experienceService: ExperiencesService, private tostr : ToastrService) { }

  ngOnInit() {
    var x = this.experienceService.getData();
    x.snapshotChanges().subscribe(item => {
      this.experienceList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.experienceList.push(y as Experiences);
      });
    });
  }
  onSearch(){
    this.displaySearch = false;
    this.searchExperience = [];
    this.experienceList.forEach(element => {
      if (this.search == element.student_name || this.search == element.position.toString()){
        this.searchExperience.push(element); 
      }
    });
    if(this.searchExperience.length <= 0 && this.search == ""){
      this.displaySearch = true;
      console.log("Search not found..");
    }
    if(this.searchExperience.length > 0 ){  
      this.searchExperience.forEach(item => {
        console.log(item.student_name);
        console.log(item.position);
        this.display = true;
      });
    }
  }
  onEdit(experience: Experiences) {
    this.experienceService.selectedExperience = Object.assign({}, experience);
    this.editState = true;
    this.itemToEdit = experience;
  }

  clearState(){
    this.editState = false;
    this.itemToEdit = null;
  }
  onDelete(key: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.experienceService.deleteExperience(key);
      this.tostr.warning("Deleted Successfully", "Experience List");
    }
  }
  onUpdate(experience: Experiences){
    this.experienceService.updateExperience(experience);
    this.editState = false;
    this.itemToEdit = null;
  }
}
