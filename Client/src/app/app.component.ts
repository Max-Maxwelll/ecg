import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { UserDataViewModel } from './models/UserDataViewModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isLoggedIn:boolean = false;
  
  constructor(public router: Router, private userService: UserService){
    
  }

}
