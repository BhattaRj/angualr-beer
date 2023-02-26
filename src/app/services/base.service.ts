import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';


@Injectable({
    providedIn: 'root'
})

export class BaseService {

    baseUrl: string = environment.url;

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor() { }

    getQueryString(query: any) {
        let queryString = '?';
        for (const key in query) {

            if (Array.isArray(query[key])) {
                let arrayKey = query[key];
                arrayKey.forEach((element: any) => {
                    queryString += key + '=' + element + '&';
                });
            } else {
                if (key && query[key] && query[key].length != 0)
                    queryString += key + '=' + query[key] + '&'
            }
        }
        return queryString;
    }

}
