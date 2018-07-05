import { Fujiyama } from './fujiyama.model';
import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class FujiyamaService {
  
  fujiyamaList: AngularFireList<any>;
  selectedInterview: Fujiyama = new Fujiyama();
  constructor(private firebase: AngularFireDatabase) { }
    getData(){
      this.fujiyamaList = this.firebase.list('tblUserManagement');
      return this.fujiyamaList;
    }
}
