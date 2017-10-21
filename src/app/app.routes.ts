import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home.component';
import { EmployeeListComponent } from './employee.component';
import { NotFoundComponent } from './notfound.component';

const rounting: Routes = [
        { path: '', component: HomeComponent },
        { path: 'employeelist', component: EmployeeListComponent },
        { path: '**', component: NotFoundComponent }
]
export const appRoutes = RouterModule.forRoot(rounting);