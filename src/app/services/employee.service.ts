import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class EmployeeService {
    // private apiURL = "http://59eaaa0340e9fa0012cbef6e.mockapi.io/api/employees/";
    private apiURL = "http://localhost:8000/api/auth/getemployee";
    constructor(private _http: Http) {

    }
    GetList(): Observable<any[]> {
        return this._http.get(this.apiURL).map((response: Response) => response.json())
    }
    GetDetail(id:number): Observable<any> {
        return this._http.get(this.apiURL+id).map((response: Response) => response.json())
    }
    Update(id: number, data: any): Observable<any> {
        return this._http.put(this.apiURL + id, data).map((response: Response) => response.json())
    }
    Delete(id: number): Observable<any> {
        return this._http.delete(this.apiURL + id).map((response: Response) => response.json())
    }
}