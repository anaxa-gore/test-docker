/**
 * Created by tbonavia on 30/06/2016.
 */
import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class HelloWorldService {
    private url = 'http://localhost:9500/hello/rest/hello';

    constructor(private http:Http) {

    }

    getInfo():Observable<string> {
        return this.http.get(this.url).map(this.extractData).catch(this.handleError);
    }

    private extractData(res:Response) {
        let data = res.text();
        return data;
    }

    private handleError(error:any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}