import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DataService {

    private apiUrl = 'http://admin.lyricsjungle.dev1.in/api/movies';

    constructor(private http: Http) {
        console.log("DataService service initialized");
    }

    getData(): Observable<any> {
        return this.http
            .get(this.apiUrl)
            .map(response => response.json()).catch(err => {
                return Observable.throw(err);
            });
    }
        
}