import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/employee.service';
@Component({
    selector: 'employee-list',
    templateUrl: './employee.component.html',
    providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {
    public employees: any[];
    constructor(private employeeService: EmployeeService) {

    }
    ngOnInit() {
        // this.employees = this.employeeService.GetList();
        this.employeeService.GetList().subscribe((response: any) => {
            this.employees = response;
        }, error=>{
            console.log(error);
        });
    }
}