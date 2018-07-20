import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Family } from './family.model';

@Injectable()
export class FamilyService {

  familyList: AngularFireList<any>;
  selectedFamily: Family = new Family();
  constructor(private firebase: AngularFireDatabase) { }

  getData(){
    this.familyList = this.firebase.list('family');
    return this.familyList;
  }
  
  insertFamily(family: Family){
    this.familyList = this.firebase.list('family');
    this.familyList.push({
      student_name: family.student_name,
      name: family.name,
      age: family.age,
      job: family.job,
      position: family.position,
      status: family.status
    });
  }
  updateFamily(family: Family){
    this.familyList.update(family.$key, {
      student_name: family.student_name,
      name: family.name,
      age: family.age,
      job: family.job,
      position: family.position,
      status: family.status
    });
  }

  deleteFamily($key: string){
    this.familyList.remove($key);
  }
}
