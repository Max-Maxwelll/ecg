import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';

import { AuthService } from '../../services/auth.service';
import { UserService} from '../../services/user.service';
import { LoginViewModel } from '../../models/LoginViewModel';
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component';
 
@Component({
    selector: 'login',
    templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
 
export class LoginComponent {
    model: LoginViewModel;
    emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    isLoggedIn: boolean = false;
    
   
    constructor(public router: Router, private userService: UserService) { }
   
    ngOnInit() {
      this.userService.isLoggedIn()
      .subscribe(res => {
        if(res == "true"){
          this.router.navigate(['/']); 
          this.isLoggedIn = true;
        }else{
          this.isLoggedIn = false;
        }
      });

      this.resetForm();
    }
   
    resetForm(form?: NgForm) {
      if (form != null)
        form.reset();
        
      this.model = {
        Email: '',
        Password: '',
        RememberMe: false
      }
    }
 
    // post the user's login details to server, if authenticated token is returned, then token is saved to session storage
    OnSubmit(form: NgForm){
      console.log("OnSubmit()");
      console.log(form.value);
      var result = this.userService.login(form.value);
        // this.userService.loginUser(this.model)
        //     .subscribe((data: any) => {
        //         if (data.Succeeded == true) {
        //             this.resetForm(form);
        //             this.router.navigate(['/']);
        //         }
        //         else
        //             console.log(data.Errors[0]);
        //     });
    }
}