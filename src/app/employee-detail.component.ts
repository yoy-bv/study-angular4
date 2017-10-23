import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import {Subscription} from 'rxjs';
import { AppComponent } from './app.component';
import { EmployeeService } from './services/employee.service';
@Component({
  selector: 'hero-detail',
  templateUrl: './employee-detail.component.html',
  providers: [EmployeeService]
})
export class EmployeeDetailComponent implements OnInit, OnDestroy {
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
    ngOnDestroy(){
        this.subcription.unsubscribe();
    }
}