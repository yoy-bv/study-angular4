import {Injectable} from '@angular/core';
@Injectable()
export class EmployeeService {
    GetList(): any[] {
        let employees:any[] = [
            { id: 1, name: "Vũ Van A" },
            { id: 1, name: "Nguyen Van B" },
            { id: 1, name: "Trân Van C" },
            { id: 1, name: "Nguyen Van D" },
        ];
        return employees;
    }
}