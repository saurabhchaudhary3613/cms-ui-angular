import { Component, OnInit } from '@angular/core';

import{ Strategy } from '../strategy';
import {StrategyService} from '../strategy.service';

@Component({
  selector: 'app-add-new-strategy',
  templateUrl: './add-new-strategy.component.html',
  styleUrls: ['./add-new-strategy.component.scss']
})
export class AddNewStrategyComponent implements OnInit {

  data: Strategy;
  delivery1: boolean;
  

  constructor(private strategyService: StrategyService) { }

  ngOnInit() {
    
    this.getStrategy();

    if(this.data.delivery === 'Tuesday'){
      this.delivery1 = true;
    }
  }

  getStrategy(): void {
    this.strategyService.getData()
        .subscribe( data => this.data = data );
        console.log('this.strategy=',this.data.frequency);
  }

  save(): void {

    //-> To do Rest call to save Strategy
    console.log("save strategy");
    

  }

}
