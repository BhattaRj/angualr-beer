import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { throwError } from 'rxjs/internal/observable/throwError';
import { NotifyService } from './notify.service';

@Injectable({
    providedIn: 'root'
})
export class ErrorHandlerService {

    constructor(
        private router: Router,
        private notifyService: NotifyService,
    ) { }

    public handleError(operation = 'operation') {
        return (error: any) => {

            if (error.error && error.error.message) {
                this.notifyService.error(`${error.error.message}`);
            } else {
                this.notifyService.error(`${error.message}`);
            }
            return throwError(() => error);
        }
    }

}
