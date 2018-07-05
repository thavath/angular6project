import { FujiyamaService } from './../services/fujiyama.service';
import { Fujiyama } from './../services/fujiyama.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fujiyama',
  templateUrl: './fujiyama.component.html',
  styleUrls: ['./fujiyama.component.css'],
  providers: [ FujiyamaService ]
})
export class FujiyamaComponent implements OnInit {
  fujiyamaList: Fujiyama[];
  constructor(private fujiyamaService: FujiyamaService) { }
  ngOnInit() {
    var datas = this.fujiyamaService.getData();
    datas.snapshotChanges().subscribe(item => {
      this.fujiyamaList = [];
      item.forEach(element => {
        var data = element.payload.toJSON();
        data["$key"] = element.key;
        this.fujiyamaList.push(data as Fujiyama); 
      });
    });
  }
}
