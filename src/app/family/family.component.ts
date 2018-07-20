import { Component, OnInit } from '@angular/core';
import { FamilyService } from '../services/family.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css'],
  providers: [ FamilyService ]
})
export class FamilyComponent implements OnInit {
  constructor(private familyService: FamilyService, private tostr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(familyForm: NgForm) {
    if (familyForm.value.$key == null)
      this.familyService.insertFamily(familyForm.value);
      // this.tostr.success('Submitted Succcessfully', 'Employee Register');
      this.tostr.success('Submitted Succcessfully', 'Family Register');
      this.resetForm(familyForm);
  }

  resetForm(familyForm?: NgForm) {
    if (familyForm != null)
    familyForm.reset();
    this.familyService.selectedFamily = {
      $key: null,
      student_name: null,
      name: null,
      age: null,
      job: null,
      position: null,
      status: null
    }
  }
}
