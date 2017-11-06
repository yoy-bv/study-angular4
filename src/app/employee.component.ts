import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import { EmployeeService } from './services/employee.service';
@Component({
    selector: 'employee-list',
    templateUrl: './employee.component.html',
    styleUrls: ['./app.component.css'],
    providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {
    public _id:number;
    public subcription:Subscription;
    public employees: any[];
    // public bootbox: BootboxStatic;
    constructor(private router: Router, private activatedRoute:ActivatedRoute, private employeeService: EmployeeService) {

    }
    ngOnInit() {
        // this.employees = this.employeeService.GetList();
        this.employeeService.GetList().subscribe((response: any) => {
            this.employees = response;
        }, error=>{
            console.log(error);
        });
        this.subcription = this.activatedRoute.params.subscribe(params=> {
            this._id = params['id'];
        });
    }
    delEmployee(id){
        let confirmResult = confirm("Are you sure to delete employee?");
        if (confirmResult) {
            this.employeeService.Delete(id).subscribe(response => {
                console.log(response)
                if (response) {
                    alert('Delete ok');
                }
            })
        }
    }
}