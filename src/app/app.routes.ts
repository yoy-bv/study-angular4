import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home.component';
import { EmployeeListComponent } from './employee.component';

const rounting: Routes = [
        {path: '', component: HomeComponent},
        {path: 'employeelist', component:EmployeeListComponent}
]
export const appRoutes = RouterModule.forRoot(rounting);