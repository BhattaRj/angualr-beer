import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BaseService } from './base.service';
import { environment } from '../../environments/environment';
import { ErrorHandlerService } from "./error.handler.service";
import { Beer, BeerFilter } from '../models/beer';

@Injectable({
    providedIn: 'root',
})
export class BeerService {

    url = environment.url + 'beers/';

    constructor(
        private http: HttpClient,
        private baseService: BaseService,
        private errorHandlerService: ErrorHandlerService
    ) { }


    // add(job: Beer): Observable<Beer> {

    //     return this.http.post<Beer>(`${this.url}`, job)
    //         .pipe(
    //             catchError(this.errorHandlerService.handleError('Post Beer'))
    //         );
    // }


    myBeer(query: BeerFilter): Observable<Beer[]> {
        return this.http.get<Beer[]>(`${this.url}my-beer`,)
            .pipe(
                catchError(this.errorHandlerService.handleError('My-Beer'))
            );
    }


    list(query: BeerFilter): Observable<Beer[]> {
        return this.http.get<Beer[]>(`${this.url}${this.baseService.getQueryString(query)}`)
            .pipe(
                catchError(this.errorHandlerService.handleError('Beer-List'))
            );
    }

}

