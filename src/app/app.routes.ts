import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home.component';
import { EmployeeListComponent } from './employee.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeeEditComponent } from './employee-edit.component';
import { NotFoundComponent } from './notfound.component';
import { LoginComponent } from './login.component';
import { CheckLoginGuard } from './guard/checklogin.guard'

const rounting: Routes = [
        { path: '', component: HomeComponent },
        { path: 'employees', component: EmployeeListComponent, canActivate: [CheckLoginGuard] },
        { path: 'employee-detail/:id', component: EmployeeDetailComponent },
        { path: 'employee-edit/:id', component: EmployeeEditComponent },
        { path: 'login', component: LoginComponent },
        { path: '**', component: NotFoundComponent }
]
export const appRoutes = RouterModule.forRoot(rounting);