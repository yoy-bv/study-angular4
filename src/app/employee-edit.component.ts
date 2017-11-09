import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import {Subscription} from 'rxjs';
import { AppComponent } from './app.component';
import { EmployeeService } from './services/employee.service';
@Component({
  selector: 'employee-edit',
  templateUrl: './employee-edit.component.html',
  providers: [EmployeeService]
})
export class EmployeeEditComponent implements OnInit, OnDestroy {
    public _id:number;
    public subcription:Subscription;
    public employee:any;
    constructor(private router: Router, private activatedRoute:ActivatedRoute, public employeeService: EmployeeService){

    }
    ngOnInit(){
        this.subcription = this.activatedRoute.params.subscribe(params=> {
            this._id = params['id'];
        });
        this.employeeService.GetDetail(this._id).subscribe((data: any) => {
            this.employee = data;
        });
    }
    GotoEmployee(){
        this.router.navigate(['employees']);
    }
    SaveForm(value){
        this.employeeService.Update(this._id, this.employee).subscribe(response => {
            if (response) {
                alert('Save success');
                this.router.navigate(['/employees']);
            }
        })
    }
    ngOnDestroy(){
        this.subcription.unsubscribe();
    }
}