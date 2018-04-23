import { Injectable } from '@angular/core';

import { Dasboard } from './dasboard';
import{ DASHBOARD } from './mock-dasboard';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class DashboardService {

    constructor() { }

    getData(): Observable<Dasboard> {
        console.log('DASHBOARD=',DASHBOARD);
        return of(DASHBOARD);
    }

    

}