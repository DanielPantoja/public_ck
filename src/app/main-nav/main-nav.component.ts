import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HttpService } from '../http.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ValidatorComponent } from '../validator/validator.component';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit, OnDestroy {
  userIsAuthenticated = false;
  private authListenerSubs: Subscription;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private httpService: HttpService,  private dialog: MatDialog, private router: Router) {}
  ngOnInit(){
    this.userIsAuthenticated = this.httpService.getIsAuth();
    this.authListenerSubs = this.httpService.getAuthStatusListener()
    .subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
    })
  }
  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();//idk if this works tbh
  }
  onLogin(){
    this.router.navigate(['/CheckTracker/login'])
  }
  onSignUp(){
    this.router.navigate(['/CheckTracker/signup'])
  }
  onLogOut() {
    this.dialog.open(ValidatorComponent, {data: {title: 'Logging Out?',message: 'Are you sure you want to log out?'}})
  }
  onAddJob() {
    this.router.navigate(['/CheckTracker/addJob'])
  }
  onGetJobs(){
    this.router.navigate(['/CheckTracker/home'])
  }
  onGetChecks() {
    this.router.navigate(['/CheckTracker/allChecks'])
  }
  onGetEntrys() {
    this.router.navigate(['/CheckTracker/allEntrys'])
  }
}
