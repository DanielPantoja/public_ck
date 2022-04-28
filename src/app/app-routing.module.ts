import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CheckTrackerComponent } from './check-tracker/check-tracker.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { AddJobComponent } from './add-job/add-job.component';
import { AddCheckComponent } from './add-check/add-check.component';
import { AddEntryComponent } from './add-entry/add-entry.component';
import { EditJobComponent } from './edit-job/edit-job.component';
import { EditCheckComponent } from './edit-check/edit-check.component';
import { EditEntryComponent } from './edit-entry/edit-entry.component';
import { ChecksComponent } from './checks/checks.component';
import { EntrysComponent } from './entrys/entrys.component';
import { AllChecksComponent } from './all-checks/all-checks.component';
import { AllEntrysComponent } from './all-entrys/all-entrys.component';

const routes: Routes = [
  {path : 'CheckTracker', component: CheckTrackerComponent},
  {path : 'CheckTracker/login', component: LoginComponent},
  {path : 'CheckTracker/signup', component: SignUpComponent},
  {path : 'CheckTracker/home', component: HomeComponent,canActivate:[AuthGuard]},
  //Forms
  {path : 'CheckTracker/add-job', component: AddJobComponent, canActivate:[AuthGuard]},
  {path : 'CheckTracker/add-check/:jId', component: AddCheckComponent, canActivate:[AuthGuard]},
  {path : 'CheckTracker/add-entry/:cId', component: AddEntryComponent, canActivate:[AuthGuard]},
  //Displays
  {path : 'CheckTracker/checks/:jId', component: ChecksComponent, canActivate:[AuthGuard]},
  {path : 'CheckTracker/entrys/:cId', component: EntrysComponent , canActivate:[AuthGuard]},
  {path : 'CheckTracker/all-checks', component: AllChecksComponent, canActivate:[AuthGuard]},
  {path : 'CheckTracker/all-entrys', component: AllEntrysComponent, canActivate:[AuthGuard]},
  //Edit Forms
  {path : 'CheckTracker/job-edit/:jId', component: EditJobComponent, canActivate:[AuthGuard]},
  {path : 'CheckTracker/check-edit/:cId', component: EditCheckComponent, canActivate:[AuthGuard]},
  {path : 'CheckTracker/entry-edit/:eId', component: EditEntryComponent, canActivate:[AuthGuard]},
  {path : '', pathMatch: "full", redirectTo: "/CheckTracker"}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
