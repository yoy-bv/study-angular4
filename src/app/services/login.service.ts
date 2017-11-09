import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class LogineService {
    private apiURL = "http://localhost:8000/api/auth/authenticate/";
    constructor(private _http: Http) {

    }
    Login(data: any): Observable<any> {
        return this._http.post(this.apiURL, data).map((response: Response) => response.json())
    }
}