import { Response } from '@angular/http';
import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { RegisterViewModel } from '../../models/RegisterViewModel';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { ReturnStatement } from '@angular/compiler';
 
@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: RegisterViewModel;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  isLoggedIn: boolean = false;
 
  constructor(public router: Router, private userService: UserService) { }
 
  ngOnInit() {
    this.userService.isLoggedIn()
      .subscribe(res => {
        if(res == "true"){
          this.isLoggedIn = true;
          this.router.navigate(['/']); 
        }else{
          this.isLoggedIn = false;
        }
      });

    this.resetForm();
  }
 
  resetForm(form?: NgForm) {
    if (form != null){
      form.reset();
      console.log("resetForm()");
    }
      
    this.model = {
      FirstName: '',
      LastName: '',
      Email: '',
      Password: '',
      ConfirmPassword: ''
    }
  }
 
  OnSubmit(form: NgForm) {
    console.log("OnSubmit");
    console.log(form.value);
    var result = this.userService.register(form.value);

    //console.log(result);
    // this.userService.registerUser(form.value.Email, form.value.Password, form.value.ConfirmPassword)
    //   .subscribe((response: any) => {
    //     if (response.status == 200)
    //     {
    //         this.router.navigate(['/login']);
    //         console.log("Registered!");
    //     }
    //     else
    //     {
    //         console.log(response);
    //         console.log(response.json());
    //         console.log(response.json().messages[0]);
    //     }
    //   });
  }
 
}