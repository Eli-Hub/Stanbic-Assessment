import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*IMPORT COMPONENTS*/
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';

/*ROUTES*/
const routes: Routes = [{ path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent }];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }