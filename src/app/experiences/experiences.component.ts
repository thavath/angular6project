import { Component, OnInit } from '@angular/core';
import { ExperiencesService } from '../services/experiences.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css'],
  providers: [ ExperiencesService ]
})
export class ExperiencesComponent implements OnInit {

  constructor(private experienceService: ExperiencesService, private tostr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(experienceForm: NgForm) {
    if (experienceForm.value.$key == null)
      this.experienceService.insertExperience(experienceForm.value);
      // this.tostr.success('Submitted Succcessfully', 'Employee Register');
      this.tostr.success('Submitted Succcessfully', 'Experience Register');
      this.resetForm(experienceForm);
  }

  resetForm(experienceForm?: NgForm) {
    if (experienceForm != null)
    experienceForm.reset();
    this.experienceService.selectedExperience = {
      $key: null,
      student_name: null,
      start_date: null,
      leave_date: null,
      company_name: null,
      position: null
    }
  }
}
