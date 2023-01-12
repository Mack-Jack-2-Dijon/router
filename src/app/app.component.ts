import { Component } from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { Routes } from '@angular/router';

const ROUTES: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'user', component: UserComponent },
   { path: '', component: UserComponent },
   
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'router';
  
  }
  
  export { ROUTES };
