import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpEvent,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { ToastyService } from '../components/toasty/toasty.service';

@Injectable()
export class MessagesHttpInterceptor implements HttpInterceptor {
    constructor(private toast: ToastyService) {}

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            tap(
                event => {
                    if (event instanceof HttpResponse) {
                    }
                },
                error => {
                    if (error instanceof HttpErrorResponse) {
                        this.toast.error(error.statusText);
                        console.log(error);
                    }
                }
            )
        );
    }
}
