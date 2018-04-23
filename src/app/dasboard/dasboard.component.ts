import { Component, OnInit } from '@angular/core';
import { Dasboard } from './dasboard';
//import { DASHBOARD } from './mock-dasboard';
import {DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.scss']
})
export class DasboardComponent implements OnInit {

  data: Dasboard;

  constructor(private dashBoardService: DashboardService) { }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.dashBoardService.getData()
        .subscribe( data => this.data = data );
  }

}
