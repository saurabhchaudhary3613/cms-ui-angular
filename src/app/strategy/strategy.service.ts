import { Injectable } from '@angular/core';

import { Strategy } from './strategy';
import{ STRATEGY } from './mock-strategy';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class StrategyService {

    constructor() { }

    getData(): Observable<Strategy> {
        console.log('Strategy=',Strategy);
        return of(STRATEGY);
    }

    

}